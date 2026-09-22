/**
 * @module Components/Repo/RepoReleasesSection
 * @description Repository Releases sidebar section.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL } from '../../Constants.js';
import { tag } from '../../icons.js';

function RepoReleasesSection() {

	return `
    <div class="border-t border-[#30363d] pt-4">
      <h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">Releases</h3>
      <div class="flex items-center gap-1.5 text-[#7d8590]">
        ${ tag( ICON_SIZE_SMALL ) }
        <span>No releases published</span>
      </div>
      <a href="#" class="inline-block mt-2 text-[#58a6ff] hover:underline font-medium">Create a new release</a>
    </div>
  `;

}

export { RepoReleasesSection };
