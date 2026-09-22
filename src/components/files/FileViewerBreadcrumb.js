/**
 * @module Components/Files/FileViewerBreadcrumb
 * @description File breadcrumb path and title header with copy action.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL } from '../../Constants.js';
import { copy, check } from '../../icons.js';

function FileViewerBreadcrumb( state ) {

	const { selectedFile, repo, copied } = state;

	return `
    <div class="px-4 pt-3 pb-1 flex items-center gap-2 text-sm">
      <button id="file-breadcrumb-repo" class="text-[#58a6ff] hover:underline font-semibold cursor-pointer">${ repo.name }</button>
      <span class="text-[#7d8590]">/</span>
      <span class="font-bold text-[#f0f6fc]">${ selectedFile.name }</span>
      <button id="file-copy-btn" class="p-1 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] transition-colors ml-1 cursor-pointer" title="Copy raw content">
        ${ copied ? check( ICON_SIZE_SMALL, 'text-[#3fb950]' ) : copy( ICON_SIZE_SMALL ) }
      </button>
    </div>
  `;

}

export { FileViewerBreadcrumb };
