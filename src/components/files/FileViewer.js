/**
 * @module Components/Files/FileViewer
 * @description Single file view with code preview, syntax highlighting, and execution console.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL, ICON_SIZE_XS } from '../../Constants.js';
import { arrowLeft, play, copy, check, monitor } from '../../icons.js';
import { highlightCode } from '../../engine/highlight.js';
import { getLogStyle } from '../../engine/logStyles.js';

const JS_FILE_REGEX = /\.(m?js|cjs)$/;

function FileViewer( state ) {

	const { selectedFile, copied, consoleLogs, isConsoleOpen } = state;
	if ( ! selectedFile ) return '';

	const lines = selectedFile.content.split( '\n' );
	const isExecutable = JS_FILE_REGEX.test( selectedFile.name );
	const highlightedLines = lines.map( ( line ) => highlightCode( line ) );

	return `
    <div class="my-4 border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden text-xs">
      <div class="bg-[#161b22] px-4 py-2.5 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-3">
          <button id="file-back-btn" class="p-1 hover:bg-[#21262d] rounded text-[#7d8590] hover:text-[#f0f6fc] transition-colors" title="Back to file list">
            ${ arrowLeft( ICON_SIZE_SMALL ) }
          </button>
          <span class="font-semibold text-[#f0f6fc]">${ selectedFile.name }</span>
          <span class="text-[#7d8590] text-[11px]">${ lines.length } lines (${ lines.length } sloc)</span>
          <span class="text-[#7d8590]">·</span>
          <span class="text-[#7d8590] text-[11px]">${ selectedFile.size }</span>
        </div>

        <div class="flex items-center gap-2">
          ${ isExecutable
		? `
            <button id="file-run-btn" class="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors shadow-xs">
              ${ play( ICON_SIZE_XS ) }
              <span>Run Code</span>
            </button>
          `
		: ''
}

          <div class="inline-flex rounded border border-[#30363d] overflow-hidden">
            <button id="file-copy-btn" class="bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] px-2.5 py-1 flex items-center gap-1.5 transition-colors">
              ${ copied ? check( ICON_SIZE_XS, 'text-[#3fb950]' ) : copy( ICON_SIZE_XS ) }
              <span>${ copied ? 'Copied!' : 'Copy raw' }</span>
            </button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse font-mono text-[11px] leading-relaxed">
          <tbody>
            ${ lines
		.map(
			( _, i ) => `
                <tr class="hover:bg-[#161b22]/50">
                  <td class="w-12 text-right pr-3 pl-4 py-0.5 select-none text-[#7d8590] border-r border-[#21262d]">${ i + 1 }</td>
                  <td class="pl-4 pr-4 py-0.5 whitespace-pre font-mono text-[#c9d1d9]">${ highlightedLines[ i ] }</td>
                </tr>
              `
		)
		.join( '' ) }
          </tbody>
        </table>
      </div>

      ${ isConsoleOpen
		? `
        <div id="file-console-panel" class="border-t border-[#30363d] bg-[#010409]">
          <div class="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-semibold text-[#f0f6fc]">
              ${ monitor( ICON_SIZE_SMALL, 'text-[#3fb950]' ) }
              <span>Execution Output</span>
              <span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full">${ consoleLogs.length } logs</span>
            </div>
            <button id="file-console-close-btn" class="text-[#7d8590] hover:text-[#f0f6fc] text-xs">Close</button>
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
      `
		: ''
}
    </div>
  `;

}

export { FileViewer };
