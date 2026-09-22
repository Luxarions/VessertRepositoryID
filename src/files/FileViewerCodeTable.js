/**
 * @module Files/FileViewerCodeTable
 * @description Code viewer table with line numbers and syntax highlighting.
 * @author prssbayu-oss
 */

import { highlightCode } from './Highlight.js';

export function FileViewerCodeTable( state ) {
	const { selectedFile } = state;
	const lines = selectedFile?.content ? selectedFile.content.split( '\n' ) : [];
	const language = selectedFile?.language || '';
	const highlightedLines = lines.map( ( line ) => highlightCode( line, language ) );

	return `
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
	`;
}

export default FileViewerCodeTable;
