/**
 * @module Modals/SearchModal
 * @description Quick file search modal dialog extending Modal base class.
 * @author prssbayu-oss
 */

import { Modal } from './Modal.js';
import { ICON_SIZE, ICON_SIZE_XS } from '../constants.js';
import { search, x } from '../icons.js';
import { getFileIcon } from '../files/FileIcons.js';

class SearchModalClass extends Modal {
	constructor() {
		super( 'search-modal', 'File Quick Search' );
	}

	render( state ) {
		const { searchModalOpen, repo } = state;
		if ( ! searchModalOpen ) return '';

		return `
			<div id="search-modal-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-20 z-50 p-4">
				<div id="search-modal-card" class="bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
					<div class="flex items-center gap-3 px-4 py-3 border-b border-[#30363d]">
						${ search( ICON_SIZE, 'text-[#7d8590]' ) }
						<input id="search-modal-input" type="text" placeholder="Search files in ${ repo.name }..." autofocus class="w-full bg-transparent text-sm text-[#f0f6fc] focus:outline-hidden placeholder-[#7d8590]">
						<button id="search-modal-close-btn" class="text-[#7d8590] hover:text-[#f0f6fc] p-1 rounded transition-colors">
							${ x( ICON_SIZE ) }
						</button>
					</div>
					<div id="search-modal-results" class="max-h-72 overflow-y-auto divide-y divide-[#21262d]">
						${ repo.files
							.map(
								( file ) => `
									<div data-search-file-path="${ file.path }" class="search-result-item px-4 py-2.5 flex items-center justify-between hover:bg-[#21262d] cursor-pointer text-xs">
										<div class="flex items-center gap-2.5">
											${ getFileIcon( file, ICON_SIZE_XS ) }
											<span class="text-[#f0f6fc] font-medium">${ file.path }</span>
										</div>
										<span class="text-[11px] text-[#7d8590]">${ file.size }</span>
									</div>
								`
							)
							.join( '' ) }
					</div>
					<div class="bg-[#0d1117] px-4 py-2 border-t border-[#30363d] text-[11px] text-[#7d8590] flex items-center justify-between">
						<span>Tip: Click any file to jump to it</span>
						<kbd class="border border-[#30363d] rounded px-1.5 py-0.5 bg-[#161b22] text-[#7d8590]">esc to close</kbd>
					</div>
				</div>
			</div>
		`;
	}
}

const defaultSearchModal = new SearchModalClass();

function SearchModal( state ) {
	return defaultSearchModal.render( state );
}

export {
	SearchModalClass,
	SearchModal,
};

export default SearchModal;
