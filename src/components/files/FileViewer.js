/**
 * @module Components/Files/FileViewer
 * @description Single file view with code preview, syntax highlighting, and execution console.
 * @author prssbayu-oss
 */

import {
	arrowLeft,
	play,
	copy,
	check,
	monitor,
	branch,
	chevronDown,
	more,
	history,
	people,
	code,
	folder,
	identicon,
} from '../../icons.js';
import { highlightCode } from '../../engine/highlight.js';
import { getLogStyle } from '../../engine/logStyles.js';

const JS_FILE_REGEX = /\.(m?js|cjs)$/;

function FileViewer( state ) {

	const { selectedFile, copied, consoleLogs, isConsoleOpen, repo } = state;
	if ( ! selectedFile ) return '';

	const lines = selectedFile.content.split( '\n' );
	const isExecutable = JS_FILE_REGEX.test( selectedFile.name );
	const highlightedLines = lines.map( ( line ) => highlightCode( line, selectedFile.language || '' ) );

	return `
    <div class="my-4 border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden text-xs">
      <!-- Top Mobile Navigation Bar: <- Files | Branch selector | Overflow -->
      <div class="bg-[#0d1117] px-4 py-3 border-b border-[#21262d] flex items-center justify-between gap-2">
        <div class="flex items-center gap-3">
          <button id="file-back-btn" class="flex items-center gap-1.5 text-[#7d8590] hover:text-[#f0f6fc] font-medium transition-colors cursor-pointer" title="Back to files">
            ${ arrowLeft( 16 ) }
            <span class="text-sm font-semibold text-[#f0f6fc]">Files</span>
          </button>
          <div class="inline-flex items-center gap-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md px-2.5 py-1 text-xs text-[#f0f6fc] font-semibold cursor-pointer">
            ${ branch( 14 ) }
            <span>${ repo.defaultBranch || 'main' }</span>
            ${ chevronDown( 12, 'text-[#7d8590]' ) }
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${ isExecutable
		? `
            <button id="file-run-btn" class="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors shadow-xs">
              ${ play( 12 ) }
              <span>Run</span>
            </button>
          `
		: ''
}
          <button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d]" title="More actions">
            ${ more( 16 ) }
          </button>
        </div>
      </div>

      <!-- Breadcrumb / File Title and Copy button -->
      <div class="px-4 pt-3 pb-1 flex items-center gap-2 text-sm">
        <button id="file-breadcrumb-repo" class="text-[#58a6ff] hover:underline font-semibold cursor-pointer">${ repo.name }</button>
        <span class="text-[#7d8590]">/</span>
        <span class="font-bold text-[#f0f6fc]">${ selectedFile.name }</span>
        <button id="file-copy-btn" class="p-1 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] transition-colors ml-1 cursor-pointer" title="Copy raw content">
          ${ copied ? check( 14, 'text-[#3fb950]' ) : copy( 14 ) }
        </button>
      </div>

      <!-- Commit Author and Time Bar -->
      <div class="mx-4 my-2 px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md flex items-center justify-between text-xs">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[#21262d]">
            ${ identicon( 22 ) }
          </div>
          <span class="font-semibold text-[#f0f6fc] italic truncate">${ repo.lastCommit?.author || 'Luxarions' }</span>
          <span class="text-[#7d8590] shrink-0 text-[11px]">${ selectedFile.lastModified || '12 minutes ago' }</span>
        </div>
        <div class="flex items-center gap-2 text-[#7d8590] shrink-0">
          <button class="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded" title="Commit details">
            ${ more( 14 ) }
          </button>
          <button id="file-history-btn" class="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded cursor-pointer" title="Commit history">
            ${ history( 14 ) }
          </button>
        </div>
      </div>

      <!-- File Metrics: lines, loc, size -->
      <div class="px-4 py-1 text-[11px] text-[#7d8590] font-mono">
        ${ lines.length } lines (${ Math.max( 1, lines.length - 1 ) } loc) · ${ selectedFile.size }
      </div>

      <!-- Toolbar: [Code] [Blame] + Action Icons -->
      <div class="mx-4 my-2 flex items-center justify-between border-b border-[#21262d] pb-2">
        <div class="inline-flex rounded-md border border-[#30363d] p-0.5 bg-[#0d1117]">
          <button class="px-3 py-1 text-xs font-semibold rounded bg-[#21262d] text-[#f0f6fc] shadow-xs cursor-pointer">Code</button>
          <button class="px-3 py-1 text-xs font-semibold rounded text-[#7d8590] hover:text-[#f0f6fc] cursor-pointer">Blame</button>
        </div>

        <div class="flex items-center gap-1.5 text-[#7d8590]">
          <button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Browse files">
            ${ folder( 14 ) }
          </button>
          <button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Contributors">
            ${ people( 14 ) }
          </button>
          <button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="Code symbols">
            ${ code( 14 ) }
          </button>
          <button class="p-1.5 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded border border-[#30363d]/50 cursor-pointer" title="More options">
            ${ more( 14 ) }
          </button>
        </div>
      </div>

      <!-- Code Area with Line Numbers & Syntax Highlighting -->
      <div class="overflow-x-auto bg-[#0d1117] py-2">
        <table class="w-full border-collapse font-mono text-[12px] leading-relaxed">
          <tbody>
            ${ lines
		.map(
			( _, i ) => `
                <tr class="hover:bg-[#161b22]/50">
                  <td class="w-10 text-right pr-4 pl-3 py-0.5 select-none text-[#6e7681] text-xs font-mono">${ i + 1 }</td>
                  <td class="pr-4 py-0.5 whitespace-pre font-mono text-[#c9d1d9]">${ highlightedLines[ i ] }</td>
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
              ${ monitor( 16, 'text-[#3fb950]' ) }
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
