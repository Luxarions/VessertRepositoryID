/**
 * @module Components/Repo/GridHelper
 * @description Layout grid helper responsible for orchestrating the repository content grid,
 * file table, README.md preview container, and sidebar detail sections.
 * @author prssbayu-oss
 */

import { FileList, FileViewer } from '../files.js';
import { RepoDetailSections } from './RepoDetailSections.js';
import { ReadmeBox } from './ReadmeBox.js';

function GridHelper( state ) {

	return `
    <div id="repo-grid-container" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-8 flex flex-col gap-4">
        ${
	state.selectedFile
		? FileViewer( state )
		: `
          ${ FileList( state ) }
          ${ state.pathSegments.length === 0 ? ReadmeBox( state ) : '' }
        `
}
      </div>
      <div class="lg:col-span-4">
        ${ RepoDetailSections( state ) }
      </div>
    </div>
  `;

}

export {
	GridHelper,
	ReadmeBox,
};
