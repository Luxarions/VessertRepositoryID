/**
 * @module Components/App
 * @description Main application component that renders the full GitHub layout and wires up events.
 * @author prssbayu-oss
 */

import { state } from '../engine/state.js';
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
} from '../engine/orchestrator.js';
import { COPY_FEEDBACK_MS, TAB_IDS, DEFAULT_TEMPLATE_REPO } from '../Constants.js';
import { GitHubHeader, NavTabs } from './header.js';
import { RepoMeta, BranchAndCodeBar, RepoDetailSections, GridHelper } from './repo.js';
import { FileList, FileViewer } from './files.js';
import { SearchModal, CommitHistoryModal } from './modals.js';
import { getFooterLinks } from '../engine/bottombar.js';
import { octocat, spark } from '../icons.js';

let appRoot = null;
let globalClickListener = null;

function closeAllDropdowns( e ) {

	if ( ! e.target.closest( '#branch-dropdown-btn' ) && ! e.target.closest( '#branch-dropdown-panel' ) ) {

		if ( state.branchDropdownOpen ) toggleBranchDropdown();

	}

	if ( ! e.target.closest( '#code-dropdown-btn' ) && ! e.target.closest( '#code-dropdown-panel' ) ) {

		if ( state.codeDropdownOpen ) toggleCodeDropdown();

	}

}

function renderApp( root ) {

	const footerLinks = getFooterLinks();

	root.innerHTML = `
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

      <footer class="border-t border-[#21262d] bg-[#010409] py-8 px-4 md:px-8 mt-auto text-xs text-[#7d8590]">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="hover:text-[#f0f6fc] cursor-pointer">${ octocat( 24, 'text-[#7d8590]' ) }</span>
            <span>&copy; ${ new Date().getFullYear() } GitHub, Inc.</span>
          </div>
          <div class="flex items-center gap-4 flex-wrap justify-center">
            ${ footerLinks.map( ( link ) => `<a href="${ link.href }" class="text-[#7d8590] hover:text-[#58a6ff] hover:underline">${ link.label }</a>` ).join( '' ) }
          </div>
        </div>
      </footer>

      ${ SearchModal( state ) }
      ${ CommitHistoryModal( state ) }
    </div>
  `;

	bindEvents( root );

}

function bindEvents( root ) {

	// Star / Fork / Watch buttons
	root.querySelector( '#star-btn' )?.addEventListener( 'click', toggleStar );
	root.querySelector( '#fork-btn' )?.addEventListener( 'click', toggleFork );
	root.querySelector( '#watch-btn' )?.addEventListener( 'click', toggleWatch );

	// Nav tabs
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

	// Branch selection
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

	// Clone tabs inside code dropdown
	root.querySelectorAll( '.clone-tab-btn' ).forEach( ( btn ) => {

		btn.addEventListener( 'click', () => {

			const tab = btn.dataset.cloneTab;
			if ( tab ) setActiveCloneTab( tab );

		} );

	} );

	// Clone URL copy button
	root.querySelector( '#clone-copy-btn' )?.addEventListener( 'click', () => {

		const input = root.querySelector( '#clone-url-input' );

		if ( input ) {

			navigator.clipboard?.writeText( input.value );
			setCopied( true );
			setTimeout( () => setCopied( false ), COPY_FEEDBACK_MS );

		}

	} );

	// File row click (open file or enter directory)
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

	// File viewer back button
	root.querySelector( '#file-back-btn' )?.addEventListener( 'click', closeFile );
	root.querySelector( '#file-breadcrumb-repo' )?.addEventListener( 'click', closeFile );
	root.querySelector( '#file-history-btn' )?.addEventListener( 'click', toggleHistoryModal );

	// File viewer copy button
	root.querySelector( '#file-copy-btn' )?.addEventListener( 'click', () => {

		if ( state.selectedFile ) {

			navigator.clipboard?.writeText( state.selectedFile.content );
			setCopied( true );
			setTimeout( () => setCopied( false ), COPY_FEEDBACK_MS );

		}

	} );

	// File viewer run code button
	root.querySelector( '#file-run-btn' )?.addEventListener( 'click', runCurrentFileCode );

	// File console close button
	root.querySelector( '#file-console-close-btn' )?.addEventListener( 'click', toggleConsole );

	// Search modal triggers
	root.querySelector( '#header-search-trigger' )?.addEventListener( 'click', toggleSearchModal );
	root.querySelector( '#search-modal-close-btn' )?.addEventListener( 'click', toggleSearchModal );

	root.querySelector( '#search-modal-backdrop' )?.addEventListener( 'click', ( e ) => {

		if ( e.target.id === 'search-modal-backdrop' ) toggleSearchModal();

	} );

	// Search modal file selection
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

	// Copy snippet buttons in Readme
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

	// View all files button - toggles all files and scrolls based on existing files/folders
	root.querySelector( '#view-all-files-btn' )?.addEventListener( 'click', () => {

		toggleViewAllFiles();

	} );

}

function mountApp( rootElement ) {

	if ( ! rootElement ) return;
	appRoot = rootElement;

	if ( globalClickListener ) {

		document.removeEventListener( 'click', globalClickListener );

	}

	globalClickListener = closeAllDropdowns;
	document.addEventListener( 'click', globalClickListener );

	onStateChange( () => {

		if ( appRoot ) renderApp( appRoot );

	} );

	renderApp( appRoot );

}

export {
	mountApp,
	renderApp,
	closeAllDropdowns,
};
