/**
 * @module Components/Repo/RepoDetailSections
 * @description About, Releases, Packages, and Contributors sidebar panels container.
 * @author prssbayu-oss
 */

import { RepoAboutSection } from './RepoAboutSection.js';
import { RepoReleasesSection } from './RepoReleasesSection.js';
import { RepoPackagesSection } from './RepoPackagesSection.js';
import { RepoContributorsSection } from './RepoContributorsSection.js';

function RepoDetailSections( state ) {

	return `
    <div class="flex flex-col gap-6 text-xs text-[#7d8590]">
      ${ RepoAboutSection( state ) }
      ${ RepoReleasesSection() }
      ${ RepoPackagesSection() }
      ${ RepoContributorsSection( state ) }
    </div>
  `;

}

export { RepoDetailSections };
