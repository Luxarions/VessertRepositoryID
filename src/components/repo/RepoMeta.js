/**
 * @module Components/Repo/RepoMeta
 * @description Repository header metadata (title, visibility, action buttons).
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL, ICON_SIZE_CHEVRON } from '../../Constants.js';
import { eye, fork, star, chevronDown } from '../../icons.js';
import { getVisibilityLabel } from '../../engine/topbar/title.js';

function RepoMeta( state ) {

	const { repo, isStarred, isWatching } = state;
	const visibility = getVisibilityLabel( repo.isPrivate );

	return `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-[#58a6ff] text-base md:text-lg font-semibold hover:underline cursor-pointer">${ repo.owner }</span>
        <span class="text-[#7d8590] font-light">/</span>
        <span class="text-[#58a6ff] text-base md:text-lg font-bold hover:underline cursor-pointer">${ repo.name }</span>
        <span class="border border-[#30363d] text-[#7d8590] text-[11px] font-semibold px-2 py-0.5 rounded-full ml-1">
          ${ visibility }
        </span>
      </div>

      <div class="flex items-center gap-2 flex-wrap text-xs">
        <div class="inline-flex rounded-md shadow-xs border border-[#30363d] overflow-hidden">
          <button id="watch-btn" class="bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 flex items-center gap-1.5 transition-colors">
            ${ eye( ICON_SIZE_SMALL ) }
            <span>${ isWatching ? 'Unwatch' : 'Watch' }</span>
            <span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full font-semibold">${ repo.watching }</span>
          </button>
        </div>

        <div class="inline-flex rounded-md shadow-xs border border-[#30363d] overflow-hidden">
          <button id="fork-btn" class="bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 flex items-center gap-1.5 transition-colors">
            ${ fork( ICON_SIZE_SMALL ) }
            <span>Fork</span>
            <span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full font-semibold">${ repo.forks }</span>
          </button>
        </div>

        <div class="inline-flex rounded-md shadow-xs border border-[#30363d] overflow-hidden">
          <button id="star-btn" class="bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 flex items-center gap-1.5 transition-colors">
            ${ star( ICON_SIZE_SMALL, isStarred ) }
            <span>${ isStarred ? 'Starred' : 'Star' }</span>
            <span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full font-semibold">${ repo.stars }</span>
          </button>
          <button class="bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] px-1.5 py-1.5 border-l border-[#30363d] transition-colors">
            ${ chevronDown( ICON_SIZE_CHEVRON ) }
          </button>
        </div>
      </div>
    </div>
  `;

}

export { RepoMeta };
