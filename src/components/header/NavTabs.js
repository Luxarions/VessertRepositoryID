/**
 * @module Components/Header/NavTabs
 * @description Repository section navigation tabs component.
 * @author prssbayu-oss
 */

import { ICON_SIZE } from '../../Constants.js';
import { getNavTabsConfig } from '../../engine/topbar/navTabs.js';

function NavTabs( activeTab ) {

	const tabs = getNavTabsConfig( 0, 0 );

	return `
    <div class="flex items-center gap-1 overflow-x-auto no-scrollbar">
      ${ tabs
		.map( ( tab ) => {

			const isActive = tab.id === activeTab;
			const borderClass = isActive
				? 'border-b-2 border-[#f78166] text-[#f0f6fc] font-semibold'
				: 'border-b-2 border-transparent text-[#7d8590] hover:text-[#f0f6fc] hover:border-[#8b949e]';

			return `
          <button data-tab="${ tab.id }" class="nav-tab-btn flex items-center gap-2 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${ borderClass }">
            ${ tab.icon( ICON_SIZE, 'shrink-0' ) }
            <span>${ tab.label }</span>
            ${ tab.badge !== undefined && tab.badge > 0
				? `<span class="bg-[#30363d] text-[#7d8590] text-[10px] px-1.5 py-0.5 rounded-full font-semibold">${ tab.badge }</span>`
				: ''
			}
          </button>
        `;

		} )
		.join( '' ) }
    </div>
  `;

}

export { NavTabs };
