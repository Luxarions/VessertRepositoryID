/**
 * @module Components/Files/FileViewer
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

function FileViewer( state ) {

	if ( ! state || ! state.selectedFile ) return '';

	return `
    <div class="my-4 border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden text-xs">
      <!-- 1. Top Navigation Bar: <- Files | Branch selector | Overflow -->
      ${ FileViewerNavBar( state ) }

      <!-- 2. Breadcrumb / File Title and Copy button -->
      ${ FileViewerBreadcrumb( state ) }

      <!-- 3. Commit Author and Time Bar -->
      ${ FileViewerCommitBar( state ) }

      <!-- 4. File Metrics: lines, loc, size -->
      ${ FileViewerMetrics( state ) }

      <!-- 5. Toolbar: [Code] [Blame] + Action Icons -->
      ${ FileViewerToolbar( state ) }

      <!-- 6. Code Area with Line Numbers & Syntax Highlighting -->
      ${ FileViewerCodeTable( state ) }

      <!-- 7. Runtime Execution Console Panel -->
      ${ state.isConsoleOpen ? FileViewerConsole( state ) : '' }
    </div>
  `;

}

export { FileViewer };
