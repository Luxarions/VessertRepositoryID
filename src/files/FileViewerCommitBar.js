/**
 * @module Files/FileViewerCommitBar
 * @description Commit author, relative timestamp, and history button for the active file.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL } from '../constants.js';
import { identicon, more, history } from '../icons.js';

export function FileViewerCommitBar( state ) {
	const { selectedFile, repo } = state;
	const author = repo?.lastCommit?.author || 'Luxarions';
	const modifiedTime = selectedFile?.lastModified || '12 minutes ago';

	return `
		<div class="mx-4 my-2 px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md flex items-center justify-between text-xs">
			<div class="flex items-center gap-2.5 min-w-0">
				<div class="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#21262d]">
					${ identicon( 22 ) }
				</div>
				<span class="font-semibold text-[#f0f6fc] italic truncate">${ author }</span>
				<span class="text-[#7d8590] shrink-0 text-[11px]">${ modifiedTime }</span>
			</div>
			<div class="flex items-center gap-2 text-[#7d8590] shrink-0">
				<button class="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded cursor-pointer" title="Commit details">
					${ more( ICON_SIZE_SMALL ) }
				</button>
				<button id="file-history-btn" class="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded cursor-pointer" title="Commit history">
					${ history( ICON_SIZE_SMALL ) }
				</button>
			</div>
		</div>
	`;
}

export default FileViewerCommitBar;
