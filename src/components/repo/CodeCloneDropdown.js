/**
 * @module Components/Repo/CodeCloneDropdown
 * @description Code action button with clone popup modal (HTTPS, CLI, Desktop, ZIP).
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL, ICON_SIZE_CHEVRON, ICON_SIZE_XS } from '../../Constants.js';
import { code, chevronDown, copy, check, download, monitor } from '../../icons.js';
import { getHttpsCloneUrl, getCliCloneCommand } from '../../engine/clone.js';

function CodeCloneDropdown( state ) {

	const {
		repo,
		codeDropdownOpen,
		activeCloneTab,
		copied,
	} = state;

	const httpsUrl = getHttpsCloneUrl( repo.owner, repo.name );
	const cliCommand = getCliCloneCommand( repo.owner, repo.name );

	return `
    <div class="relative">
      <button id="code-dropdown-btn" class="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors shadow-xs">
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
  `;

}

export { CodeCloneDropdown };
