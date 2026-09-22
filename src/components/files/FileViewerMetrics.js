/**
 * @module Components/Files/FileViewerMetrics
 * @description Displays file line counts, lines of code (loc), and file size.
 * @author prssbayu-oss
 */

function FileViewerMetrics( state ) {

	const { selectedFile } = state;
	const lines = selectedFile?.content ? selectedFile.content.split( '\n' ) : [];
	const lineCount = lines.length;
	const loc = Math.max( 1, lineCount - 1 );
	const size = selectedFile?.size || '0 B';

	return `
    <div class="px-4 py-1 text-[11px] text-[#7d8590] font-mono">
      ${ lineCount } lines (${ loc } loc) · ${ size }
    </div>
  `;

}

export { FileViewerMetrics };
