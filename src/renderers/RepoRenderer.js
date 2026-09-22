/**
 * @module Renderers/RepoRenderer
 * @description Main repository renderer orchestrating the full GitHub repository experience.
 * Directly modeled after the Three.js WebGLRenderer pattern.
 * Manages lifecycle (mount, render, bindEvents, dispose) and state updates.
 * @author prssbayu-oss
 */

import { state } from '../core/State.js';
import {
	onStateChange,
	toggleStar,
	toggleFork,
	toggleWatch,
	setActiveTab,
	setCurrentBranch,
	openFile,
	closeFile,
	navigateDir,
	navigateUp,
	navigateRoot,
	setPathSegments,
	toggleBranchDropdown,
	toggleCodeDropdown,
	setBranchSearchQuery,
	setActiveCloneTab,
	setCopied,
	toggleSearchModal,
	toggleHistoryModal,
	toggleConsole,
	toggleViewAllFiles,
	setActiveReadmeTab,
	runCurrentFileCode,
} from '../core/Orchestrator.js';
import { COPY_FEEDBACK_MS, TAB_IDS, DEFAULT_TEMPLATE_REPO } from '../constants.js';
import { GitHubHeader, NavTabs } from '../header/header.js';
import { RepoMeta, BranchAndCodeBar, GridHelper } from '../repo/repo.js';
import { Footer } from '../footer/footer.js';
import { SearchModal, CommitHistoryModal } from '../modals/modals.js';
import { spark } from '../icons.js';

export class RepoRenderer {
	/**
	 * @param {HTMLElement} [container=null] Target DOM element to mount the repository UI
	 */
	constructor( container = null ) {
		this.domElement = container;
		this._globalClickListener = null;
		this._unsubscribe = null;

		if ( container ) {
			this.mount( container );
		}
	}

	closeAllDropdowns( e ) {
		if ( ! e.target.closest( '#branch-dropdown-btn' ) && ! e.target.closest( '#branch-dropdown-panel' ) ) {
			if ( state.branchDropdownOpen ) toggleBranchDropdown();
		}

		if ( ! e.target.closest( '#code-dropdown-btn' ) && ! e.target.closest( '#code-dropdown-panel' ) ) {
			if ( state.codeDropdownOpen ) toggleCodeDropdown();
		}
	}

	render() {
		if ( ! this.domElement ) return;

		this.domElement.innerHTML = `
			<div class="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col font-casual-phone">
				${ GitHubHeader() }

				<div class="border-b border-[#21262d] bg-[#010409] px-4 md:px-8">
					<div class="max-w-7xl mx-auto">
						${ RepoMeta( state ) }
						${ NavTabs( state.activeTab ) }
					</div>
				</div>

				<main class="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
					${ state.activeTab === TAB_IDS.CODE
						? `
							<div class="text-xs text-[#7d8590] mb-3 flex items-center gap-1.5 flex-wrap">
								<span>Generated from</span>
								<a href="https://github.com/${ DEFAULT_TEMPLATE_REPO }" target="_blank" rel="noopener noreferrer" class="text-[#58a6ff] hover:underline flex items-center gap-1 font-medium">
									${ spark( 13, 'text-[#7d8590]' ) }
									<span>${ DEFAULT_TEMPLATE_REPO }</span>
								</a>
							</div>

							${ BranchAndCodeBar( state ) }

							${ GridHelper( state ) }
						`
						: `
							<div class="border border-[#30363d] rounded-md p-12 text-center my-8 bg-[#161b22]">
								<h2 class="text-lg font-semibold text-[#f0f6fc] capitalize">${ state.activeTab }</h2>
								<p class="text-xs text-[#7d8590] mt-2">This section is not configured for this demo repository.</p>
							</div>
						`
					}
				</main>

				${ Footer() }

				${ SearchModal( state ) }
				${ CommitHistoryModal( state ) }
			</div>
		`;

		this.bindEvents();
	}

	bindEvents() {
		const root = this.domElement;
		if ( ! root ) return;

		// Star / Fork / Watch buttons
		root.querySelector( '#star-btn' )?.addEventListener( 'click', toggleStar );
		root.querySelector( '#fork-btn' )?.addEventListener( 'click', toggleFork );
		root.querySelector( '#watch-btn' )?.addEventListener( 'click', toggleWatch );

		// Navigation Tabs
		root.querySelectorAll( '.nav-tab-btn' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const tab = btn.dataset.tab;
				if ( tab ) setActiveTab( tab );
			} );
		} );

		// Branch dropdown toggle
		root.querySelector( '#branch-dropdown-btn' )?.addEventListener( 'click', ( e ) => {
			e.stopPropagation();
			toggleBranchDropdown();
		} );

		// Branch search input
		root.querySelector( '#branch-search-input' )?.addEventListener( 'input', ( e ) => {
			setBranchSearchQuery( e.target.value );
		} );

		// Branch selection item
		root.querySelectorAll( '.branch-select-item' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const branch = btn.dataset.branch;
				if ( branch ) setCurrentBranch( branch );
			} );
		} );

		// Code dropdown toggle
		root.querySelector( '#code-dropdown-btn' )?.addEventListener( 'click', ( e ) => {
			e.stopPropagation();
			toggleCodeDropdown();
		} );

		// Clone tabs in code dropdown
		root.querySelectorAll( '.clone-tab-btn' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const tab = btn.dataset.cloneTab;
				if ( tab ) setActiveCloneTab( tab );
			} );
		} );

		// Clone copy action
		root.querySelector( '#clone-copy-btn' )?.addEventListener( 'click', () => {
			const input = root.querySelector( '#clone-url-input' );
			if ( input ) {
				navigator.clipboard?.writeText( input.value );
				setCopied( true );
				setTimeout( () => setCopied( false ), COPY_FEEDBACK_MS );
			}
		} );

		// File row click (open file or navigate directory)
		root.querySelectorAll( '.file-item-row' ).forEach( ( row ) => {
			row.addEventListener( 'click', () => {
				const path = row.dataset.filePath;
				const type = row.dataset.fileType;

				if ( type === 'dir' ) {
					if ( path ) {
						setPathSegments( path.split( '/' ).filter( Boolean ) );
					} else {
						navigateDir( row.querySelector( 'span.truncate' )?.textContent?.trim() );
					}
				} else if ( path ) {
					openFile( path );
				}
			} );
		} );

		// Breadcrumb navigation
		root.querySelector( '#breadcrumb-root' )?.addEventListener( 'click', navigateRoot );

		root.querySelectorAll( '.breadcrumb-nav' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const idx = parseInt( btn.dataset.breadcrumbIdx, 10 );
				if ( ! isNaN( idx ) ) navigateUp( idx );
			} );
		} );

		// File viewer back buttons
		root.querySelector( '#file-back-btn' )?.addEventListener( 'click', closeFile );
		root.querySelector( '#file-breadcrumb-repo' )?.addEventListener( 'click', closeFile );
		root.querySelector( '#file-history-btn' )?.addEventListener( 'click', toggleHistoryModal );

		// File viewer copy content button
		root.querySelector( '#file-copy-btn' )?.addEventListener( 'click', () => {
			if ( state.selectedFile ) {
				navigator.clipboard?.writeText( state.selectedFile.content );
				setCopied( true );
				setTimeout( () => setCopied( false ), COPY_FEEDBACK_MS );
			}
		} );

		// File viewer run button
		root.querySelector( '#file-run-btn' )?.addEventListener( 'click', runCurrentFileCode );

		// File console close button
		root.querySelector( '#file-console-close-btn' )?.addEventListener( 'click', toggleConsole );

		// Search modal triggers
		root.querySelector( '#header-search-trigger' )?.addEventListener( 'click', toggleSearchModal );
		root.querySelector( '#search-modal-close-btn' )?.addEventListener( 'click', toggleSearchModal );

		root.querySelector( '#search-modal-backdrop' )?.addEventListener( 'click', ( e ) => {
			if ( e.target.id === 'search-modal-backdrop' ) toggleSearchModal();
		} );

		// Search modal item selection
		root.querySelectorAll( '.search-result-item' ).forEach( ( item ) => {
			item.addEventListener( 'click', () => {
				const path = item.dataset.searchFilePath;
				if ( path ) {
					toggleSearchModal();
					openFile( path );
				}
			} );
		} );

		// Commit history modal triggers
		root.querySelector( '#commit-history-btn' )?.addEventListener( 'click', toggleHistoryModal );
		root.querySelector( '#history-modal-close-btn' )?.addEventListener( 'click', toggleHistoryModal );

		root.querySelector( '#history-modal-backdrop' )?.addEventListener( 'click', ( e ) => {
			if ( e.target.id === 'history-modal-backdrop' ) toggleHistoryModal();
		} );

		// Readme tabs toggle (README / MIT license)
		root.querySelectorAll( '.readme-tab-btn' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const tab = btn.dataset.readmeTab;
				if ( tab ) setActiveReadmeTab( tab );
			} );
		} );

		// Readme copy snippet buttons
		root.querySelectorAll( '.copy-snippet-btn' ).forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				const text = btn.dataset.copyText;
				if ( text ) {
					navigator.clipboard?.writeText( text );
					setCopied( true );
					setTimeout( () => setCopied( false ), COPY_FEEDBACK_MS );
				}
			} );
		} );

		// View all files button
		root.querySelector( '#view-all-files-btn' )?.addEventListener( 'click', () => {
			const wasShowingAll = state.viewAllFiles;
			toggleViewAllFiles();

			if ( ! wasShowingAll ) {
				requestAnimationFrame( () => {
					const fileCard = root.querySelector( '#repo-file-list-card' );
					fileCard?.scrollIntoView( { behavior: 'smooth', block: 'nearest' } );
				} );
			}
		} );
	}

	mount( container ) {
		if ( ! container ) return;
		this.domElement = container;

		if ( this._globalClickListener ) {
			document.removeEventListener( 'click', this._globalClickListener );
		}

		this._globalClickListener = ( e ) => this.closeAllDropdowns( e );
		document.addEventListener( 'click', this._globalClickListener );

		this._unsubscribe = onStateChange( () => {
			this.render();
		} );

		this.render();
	}

	dispose() {
		if ( this._globalClickListener ) {
			document.removeEventListener( 'click', this._globalClickListener );
			this._globalClickListener = null;
		}

		if ( this._unsubscribe && typeof this._unsubscribe === 'function' ) {
			this._unsubscribe();
			this._unsubscribe = null;
		}

		if ( this.domElement ) {
			this.domElement.innerHTML = '';
			this.domElement = null;
		}
	}
}

// Global active renderer singleton instance
let defaultRenderer = null;

export function renderApp( root ) {
	if ( ! defaultRenderer ) {
		defaultRenderer = new RepoRenderer( root );
	} else {
		defaultRenderer.domElement = root;
		defaultRenderer.render();
	}
}

export function mountApp( rootElement ) {
	if ( ! defaultRenderer ) {
		defaultRenderer = new RepoRenderer( rootElement );
	} else {
		defaultRenderer.mount( rootElement );
	}
	return defaultRenderer;
}

export default RepoRenderer;
