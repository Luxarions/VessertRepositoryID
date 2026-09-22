/**
 * @module Components/Repo/RepoAboutSection
 * @description Repository About sidebar section with description, links, and stars/watch/fork statistics.
 * @author prssbayu-oss
 */

import { ICON_SIZE_XS } from '../../Constants.js';
import { bookOpen, star, eye, fork, activity } from '../../icons.js';
import {
	formatStarsMeta,
	formatWatchingMeta,
	formatForksMeta,
} from '../../engine/bottombar/repoDetailMeta.js';

function RepoAboutSection( state ) {

	const { repo } = state;

	return `
    <div>
      <h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">About</h3>
      <p class="text-[#c9d1d9] mb-3 leading-relaxed">${ repo.description }</p>
      <div class="flex flex-col gap-2.5">
        <a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
          ${ bookOpen( ICON_SIZE_XS ) }
          <span>Readme</span>
        </a>
        <a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
          ${ activity( ICON_SIZE_XS ) }
          <span>Activity</span>
        </a>
        <a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
          ${ star( ICON_SIZE_XS ) }
          <span>${ formatStarsMeta( repo.stars ) }</span>
        </a>
        <a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
          ${ eye( ICON_SIZE_XS ) }
          <span>${ formatWatchingMeta( repo.watching ) }</span>
        </a>
        <a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
          ${ fork( ICON_SIZE_XS ) }
          <span>${ formatForksMeta( repo.forks ) }</span>
        </a>
      </div>
    </div>
  `;

}

export { RepoAboutSection };
