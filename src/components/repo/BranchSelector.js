/**
 * @module Components/Repo/BranchSelector
 * @description Branch dropdown button, search input filter, branch list, and tag counts.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL, ICON_SIZE_CHEVRON, ICON_SIZE_XS } from '../../Constants.js';
import { branch, chevronDown, tag, check } from '../../icons.js';
import { filterBranches } from '../../engine/filterBranches.js';

function BranchSelector( state ) {

	const {
		currentBranch,
		repo,
		branchDropdownOpen,
		branchSearchQuery,
	} = state;

	const filteredBranches = filterBranches( repo.branches, branchSearchQuery );

	return `
    <div class="flex items-center gap-2 flex-wrap text-xs">
      <div class="relative">
        <button id="branch-dropdown-btn" class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors">
          ${ branch( ICON_SIZE_SMALL ) }
          <span class="font-semibold">${ currentBranch }</span>
          ${ chevronDown( ICON_SIZE_CHEVRON, 'text-[#7d8590]' ) }
        </button>

        ${ branchDropdownOpen
		? `
          <div id="branch-dropdown-panel" class="absolute left-0 top-full mt-1.5 w-64 bg-[#161b22] border border-[#30363d] rounded-md shadow-xl z-50 overflow-hidden">
            <div class="px-3 py-2 border-b border-[#30363d] flex items-center justify-between">
              <span class="font-semibold text-xs text-[#f0f6fc]">Switch branches/tags</span>
            </div>
            <div class="p-2 border-b border-[#30363d]">
              <input id="branch-search-input" type="text" placeholder="Find a branch..." value="${ branchSearchQuery }" class="w-full bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1 text-xs text-[#f0f6fc] focus:outline-hidden focus:border-[#58a6ff]">
            </div>
            <div class="max-h-48 overflow-y-auto">
              ${ filteredBranches
		.map(
			( b ) => `
                <button data-branch="${ b }" class="branch-select-item w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#21262d] text-[#f0f6fc] ${ b === currentBranch ? 'font-bold' : '' }">
                  <span>${ b }</span>
                  ${ b === currentBranch ? check( ICON_SIZE_XS, 'text-[#3fb950]' ) : '' }
                </button>
              `
		)
		.join( '' ) }
            </div>
          </div>
        `
		: ''
}
      </div>

      <button class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors">
        ${ branch( ICON_SIZE_SMALL, 'text-[#7d8590]' ) }
        <span><strong class="text-[#f0f6fc]">${ repo.branches.length }</strong> branches</span>
      </button>

      <button class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors">
        ${ tag( ICON_SIZE_SMALL, 'text-[#7d8590]' ) }
        <span><strong class="text-[#f0f6fc]">${ repo.tagsCount }</strong> tags</span>
      </button>
    </div>
  `;

}

export { BranchSelector };
