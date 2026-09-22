/**
 * @module Files/FileViewerConsole
 * @description Execution output console panel showing runtime logs.
 * @author prssbayu-oss
 */

import { ICON_SIZE, LOG_TYPES } from '../constants.js';
import { monitor } from '../icons.js';

export function getLogStyle( type ) {
	switch ( type ) {
		case LOG_TYPES.SUCCESS:
			return { color: 'text-[#3fb950]', border: 'border-l-2 border-[#3fb950]' };
		case LOG_TYPES.WARN:
			return { color: 'text-[#d29922]', border: 'border-l-2 border-[#d29922]' };
		case LOG_TYPES.ERROR:
			return { color: 'text-[#f85149]', border: 'border-l-2 border-[#f85149]' };
		case LOG_TYPES.INFO:
			return { color: 'text-[#58a6ff]', border: 'border-l-2 border-[#58a6ff]' };
		default:
			return { color: 'text-[#c9d1d9]', border: 'border-l-2 border-[#30363d]' };
	}
}

export function FileViewerConsole( state ) {
	const { consoleLogs = [] } = state;

	return `
		<div id="file-console-panel" class="border-t border-[#30363d] bg-[#010409]">
			<div class="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
				<div class="flex items-center gap-2 text-xs font-semibold text-[#f0f6fc]">
					${ monitor( ICON_SIZE, 'text-[#3fb950]' ) }
					<span>Execution Output</span>
					<span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full">${ consoleLogs.length } logs</span>
				</div>
				<button id="file-console-close-btn" class="text-[#7d8590] hover:text-[#f0f6fc] text-xs cursor-pointer">Close</button>
			</div>
			<div class="p-3 font-mono text-[11px] max-h-60 overflow-y-auto flex flex-col gap-1">
				${ consoleLogs.length === 0
					? '<span class="text-[#7d8590] italic">No output produced.</span>'
					: consoleLogs
						.map( ( log ) => {
							const style = getLogStyle( log.type );
							return `
								<div class="flex items-start gap-2 py-0.5 px-2 rounded bg-[#0d1117] ${ style.border }">
									<span class="text-[#7d8590] shrink-0 text-[10px]">${ log.time }</span>
									<span class="font-semibold uppercase shrink-0 text-[10px] ${ style.color }">[${ log.type }]</span>
									<span class="${ style.color } break-all whitespace-pre-wrap">${ log.message }</span>
								</div>
							`;
						} )
						.join( '' )
				}
			</div>
		</div>
	`;
}

export default FileViewerConsole;
