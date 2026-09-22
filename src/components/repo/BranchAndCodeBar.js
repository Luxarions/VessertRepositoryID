/**
 * @module Components/Repo/BranchAndCodeBar
 * @description Branch selector, tags, commit history, and Clone dropdown toolbar.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL, ICON_SIZE_CHEVRON, ICON_SIZE_XS } from '../../Constants.js';
import { branch, chevronDown, tag, history, code, copy, check, download, monitor } from '../../icons.js';
import { filterBranches } from '../../engine/filterBranches.js';
import { getHttpsCloneUrl, getCliCloneCommand } from '../../engine/clone.js';

function BranchAndCodeBar( state ) {

	const {
		currentBranch,
		repo,
		branchDropdownOpen,
		codeDropdownOpen,
		branchSearchQuery,
		activeCloneTab,
		copied,
	} = state;

	const filteredBranches = filterBranches( repo.branches, branchSearchQuery );
	const httpsUrl = getHttpsCloneUrl( repo.owner, repo.name );
	const cliCommand = getCliCloneCommand( repo.owner, repo.name );

	return `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
      <div class="flex items-center gap-2 flex-wrap text-xs">
        <div class="relative">
          <button id="branch-dropdown-btn" class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer">
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

        <button class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer">
          ${ branch( ICON_SIZE_SMALL, 'text-[#7d8590]' ) }
          <span><strong class="text-[#f0f6fc]">${ repo.branches.length }</strong> branches</span>
        </button>

        <button class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#f0f6fc] font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer">
          ${ tag( ICON_SIZE_SMALL, 'text-[#7d8590]' ) }
          <span><strong class="text-[#f0f6fc]">${ repo.tagsCount }</strong> tags</span>
        </button>
      </div>

      <div class="flex items-center gap-2 text-xs">
        <button id="commit-history-btn" class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#7d8590] hover:text-[#f0f6fc] px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer">
          ${ history( ICON_SIZE_SMALL ) }
          <span><strong class="text-[#f0f6fc]">${ repo.commits.length }</strong> commits</span>
        </button>

        <div class="relative">
          <button id="code-dropdown-btn" class="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer">
            ${ code( ICON_SIZE_SMALL ) }
            <span>Code</span>
            ${ chevronDown( ICON_SIZE_CHEVRON ) }
          </button>

          ${ codeDropdownOpen
		? `
            <div id="code-dropdown-panel" class="absolute right-0 top-full mt-1.5 w-80 bg-[#161b22] border border-[#30363d] rounded-md shadow-xl z-50 p-3">
              <div class="flex items-center gap-2 border-b border-[#30363d] pb-2 mb-2">
                <button data-clone-tab="https" class="clone-tab-btn font-semibold text-xs pb-1 transition-colors ${ activeCloneTab === 'https' ? 'text-[#f0f6fc] border-b-2 border-[#f78166]' : 'text-[#7d8590] hover:text-[#f0f6fc]' }">
                  HTTPS
                </button>
                <button data-clone-tab="cli" class="clone-tab-btn font-semibold text-xs pb-1 transition-colors ${ activeCloneTab === 'cli' ? 'text-[#f0f6fc] border-b-2 border-[#f78166]' : 'text-[#7d8590] hover:text-[#f0f6fc]' }">
                  GitHub CLI
                </button>
              </div>

              <div class="flex items-center gap-1 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1 mb-2">
                <input id="clone-url-input" type="text" readonly value="${ activeCloneTab === 'https' ? httpsUrl : cliCommand }" class="w-full bg-transparent text-xs text-[#7d8590] focus:outline-hidden font-mono select-all">
                <button id="clone-copy-btn" class="text-[#7d8590] hover:text-[#f0f6fc] p-1 rounded transition-colors" title="Copy to clipboard">
                  ${ copied ? check( ICON_SIZE_XS, 'text-[#3fb950]' ) : copy( ICON_SIZE_XS ) }
                </button>
              </div>

              <div class="border-t border-[#30363d] pt-2 flex flex-col gap-1.5">
                <a href="#" class="flex items-center gap-2 text-xs text-[#c9d1d9] hover:text-[#58a6ff] p-1.5 rounded hover:bg-[#21262d] transition-colors">
                  ${ monitor( ICON_SIZE_SMALL ) }
                  <span>Open with GitHub Desktop</span>
                </a>
                <a href="#" class="flex items-center gap-2 text-xs text-[#c9d1d9] hover:text-[#58a6ff] p-1.5 rounded hover:bg-[#21262d] transition-colors">
                  ${ download( ICON_SIZE_SMALL ) }
                  <span>Download ZIP</span>
                </a>
              </div>
            </div>
          `
		: ''
}
        </div>
      </div>
    </div>
  `;

}

export { BranchAndCodeBar };
