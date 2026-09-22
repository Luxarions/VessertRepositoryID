/**
 * @module Components/Repo/BranchAndCodeBar
 * @description Branch selector, tags, commit history, and Clone dropdown toolbar.
 * @author prssbayu-oss
 */

import { ICON_SIZE_SMALL } from '../../Constants.js';
import { history } from '../../icons.js';
import { BranchSelector } from './BranchSelector.js';
import { CodeCloneDropdown } from './CodeCloneDropdown.js';

function BranchAndCodeBar( state ) {

	const { repo } = state;

	return `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
      ${ BranchSelector( state ) }

      <div class="flex items-center gap-2 text-xs">
        <button id="commit-history-btn" class="bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#7d8590] hover:text-[#f0f6fc] px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer">
          ${ history( ICON_SIZE_SMALL ) }
          <span><strong class="text-[#f0f6fc]">${ repo.commits.length }</strong> commits</span>
        </button>

        ${ CodeCloneDropdown( state ) }
      </div>
    </div>
  `;

}

export { BranchAndCodeBar };
