/**
 * @module Files/FileViewerToolbar
 * @description Action toolbar featuring Code/Blame view tabs and repository action shortcuts.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL } from '../constants.js';
import { folder, people, code, more } from '../icons.js';

export function FileViewerToolbar() {
	return `
		<div class="mx-4 my-2 flex items-center justify-between border-b border-[#21262d] pb-2">
			<div class="inline-flex rounded-md border border-[#30363d] p-0.5 bg-[#0d1117]">
				<button class="px-3 py-1 text-xs font-semibold rounded bg-[#21262d] text-[#f0f6fc] shadow-xs cursor-pointer">Code</button>
				<button class="px-3 py-1 text-xs font-semibold rounded text-[#7d8590] hover:text-[#f0f6fc] cursor-pointer">Blame</button>
			</div>

			<div class="flex items-center gap-1.5 text-[#7d8590]">
				<button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Browse files">
					${ folder( ICON_SIZE_SMALL ) }
				</button>
				<button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Contributors">
					${ people( ICON_SIZE_SMALL ) }
				</button>
				<button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Code symbols">
					${ code( ICON_SIZE_SMALL ) }
				</button>
				<button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="More options">
					${ more( ICON_SIZE_SMALL ) }
				</button>
			</div>
		</div>
	`;
}

export default FileViewerToolbar;
