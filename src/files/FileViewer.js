/**
 * @module Files/FileViewer
 * @description Single file view composing modular navigation, metadata, code viewer, and console components.
 * @author prssbayu-oss
 */

import { FileViewerNavBar } from './FileViewerNavBar.js';
import { FileViewerBreadcrumb } from './FileViewerBreadcrumb.js';
import { FileViewerCommitBar } from './FileViewerCommitBar.js';
import { FileViewerMetrics } from './FileViewerMetrics.js';
import { FileViewerToolbar } from './FileViewerToolbar.js';
import { FileViewerCodeTable } from './FileViewerCodeTable.js';
import { FileViewerConsole } from './FileViewerConsole.js';

export function FileViewer( state ) {
	if ( ! state || ! state.selectedFile ) return '';

	return `
		<div class="my-4 border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden text-xs">
			${ FileViewerNavBar( state ) }
			${ FileViewerBreadcrumb( state ) }
			${ FileViewerCommitBar( state ) }
			${ FileViewerMetrics( state ) }
			${ FileViewerToolbar( state ) }
			${ FileViewerCodeTable( state ) }
			${ state.isConsoleOpen ? FileViewerConsole( state ) : '' }
		</div>
	`;
}

export default FileViewer;
