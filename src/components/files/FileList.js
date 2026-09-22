/**
 * @module Components/Files/FileList
 * @description File and directory table listing with breadcrumbs and last commit banner.
 * @author prssbayu-oss
 */

import { ICON_SIZE, ICON_SIZE_XS } from '../../Constants.js';
import { getFilesInDirectory, sortFiles } from '../../engine/fileTree.js';
import { getFileIcon } from '../../engine/fileIcons.js';
import { identicon, check } from '../../icons.js';

function FileList( state ) {

	const { repo, pathSegments, viewAllFiles } = state;
	const isRoot = pathSegments.length === 0;

	// When viewAllFiles is true, show all files & folders across repository
	const currentFiles = viewAllFiles
		? repo.files
		: getFilesInDirectory( repo.files, pathSegments );

	const sortedFiles = sortFiles( currentFiles );

	return `
    <div id="repo-file-list-card" class="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden my-4">
      <div class="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div class="flex items-center gap-2">
          ${ identicon( 20 ) }
          <span class="font-semibold text-[#f0f6fc] hover:underline cursor-pointer">${ repo.lastCommit.author }</span>
          <span class="text-[#7d8590] truncate max-w-xs sm:max-w-md">${ repo.lastCommit.message }</span>
        </div>
        <div class="flex items-center gap-3 text-[#7d8590] shrink-0">
          <span class="flex items-center gap-1 font-mono text-[11px] text-[#58a6ff] hover:underline cursor-pointer">
            ${ repo.lastCommit.hash }
          </span>
          <span>·</span>
          <span>${ repo.lastCommit.date }</span>
          <span class="border border-[#30363d] text-[#3fb950] rounded px-1 text-[10px] flex items-center gap-1 font-semibold">
            ${ check( ICON_SIZE_XS, 'text-[#3fb950]' ) }
            Verified
          </span>
        </div>
      </div>

      ${ ! isRoot && ! viewAllFiles
		? `
        <div class="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2 text-xs font-semibold">
          <button id="breadcrumb-root" class="text-[#58a6ff] hover:underline">${ repo.name }</button>
          ${ pathSegments
		.map(
			( seg, i ) => `
              <span class="text-[#7d8590]">/</span>
              ${ i === pathSegments.length - 1
		? `<span class="text-[#f0f6fc]">${ seg }</span>`
		: `<button data-breadcrumb-idx="${ i }" class="breadcrumb-nav text-[#58a6ff] hover:underline">${ seg }</button>`
}
            `
		)
		.join( '' ) }
        </div>
      `
		: ''
}

      ${ viewAllFiles
		? `
        <div class="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between text-xs text-[#7d8590]">
          <span class="font-semibold text-[#f0f6fc]">All files and folders (${ sortedFiles.length })</span>
          <span class="text-[11px]">Scroll to browse all repository items</span>
        </div>
      `
		: ''
}

      <!-- Scrollable file and folder list container -->
      <div id="file-items-scroll-container" class="divide-y divide-[#21262d] text-xs max-h-[380px] overflow-y-auto scroll-smooth focus:outline-none">
        ${ sortedFiles.length === 0
		? `
          <div class="px-4 py-6 text-center text-[#7d8590]">
            This directory is empty.
          </div>
        `
		: sortedFiles
			.map(
				( item ) => `
            <div data-file-path="${ item.path }" data-file-type="${ item.type }" class="file-item-row px-4 py-2.5 flex items-center justify-between hover:bg-[#161b22] cursor-pointer transition-colors group">
              <div class="flex items-center gap-3 min-w-0">
                <span class="shrink-0">${ getFileIcon( item, ICON_SIZE ) }</span>
                <span class="text-[#f0f6fc] group-hover:text-[#58a6ff] group-hover:underline truncate font-medium">
                  ${ viewAllFiles ? item.path : item.name }
                </span>
              </div>
              <div class="flex items-center gap-4 text-[#7d8590] shrink-0 text-right">
                <span class="hidden md:inline truncate max-w-xs">${ repo.lastCommit.message }</span>
                <span class="text-[11px]">${ item.lastModified || '1 minute ago' }</span>
              </div>
            </div>
          `
			)
			.join( '' ) }
      </div>

      <div class="bg-[#161b22] px-4 py-2.5 text-center border-t border-[#30363d]">
        <button id="view-all-files-btn" class="text-xs text-[#58a6ff] hover:underline font-medium cursor-pointer">
          ${ viewAllFiles ? 'Collapse file list' : 'View all files' }
        </button>
      </div>
    </div>
  `;

}

export { FileList };
