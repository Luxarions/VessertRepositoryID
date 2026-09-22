/**
 * @module Components/Files/FileViewerNavBar
 * @description Top navigation bar for file viewer with back button, branch badge, run action, and more menu.
 * @author prssbayu-oss
 */

import { ICON_SIZE, ICON_SIZE_SMALL, ICON_SIZE_XS } from '../../Constants.js';
import { arrowLeft, branch, chevronDown, play, more } from '../../icons.js';

const JS_FILE_REGEX = /\.(m?js|cjs)$/;

function FileViewerNavBar( state ) {

	const { selectedFile, repo } = state;
	const isExecutable = JS_FILE_REGEX.test( selectedFile?.name || '' );
	const defaultBranch = repo?.defaultBranch || 'main';

	return `
    <div class="bg-[#0d1117] px-4 py-3 border-b border-[#21262d] flex items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <button id="file-back-btn" class="flex items-center gap-1.5 text-[#7d8590] hover:text-[#f0f6fc] font-medium transition-colors cursor-pointer" title="Back to files">
          ${ arrowLeft( ICON_SIZE ) }
          <span class="text-sm font-semibold text-[#f0f6fc]">Files</span>
        </button>
        <div class="inline-flex items-center gap-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md px-2.5 py-1 text-xs text-[#f0f6fc] font-semibold cursor-pointer">
          ${ branch( ICON_SIZE_SMALL ) }
          <span>${ defaultBranch }</span>
          ${ chevronDown( ICON_SIZE_XS, 'text-[#7d8590]' ) }
        </div>
      </div>

      <div class="flex items-center gap-2">
        ${ isExecutable
		? `
          <button id="file-run-btn" class="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer">
            ${ play( ICON_SIZE_XS ) }
            <span>Run</span>
          </button>
        `
		: ''
}
        <button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] cursor-pointer" title="More actions">
          ${ more( ICON_SIZE ) }
        </button>
      </div>
    </div>
  `;

}

export { FileViewerNavBar };
