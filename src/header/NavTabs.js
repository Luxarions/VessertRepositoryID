/**
 * @module Header/NavTabs
 * @description Repository section navigation tabs component.
 * @author prssbayu-oss
 */

import { ICON_SIZE, TAB_IDS } from '../constants.js';
import { code, circleDot, gitPullRequest, play, bookOpen } from '../icons.js';

const TAB_ICONS = {
	code,
	circleDot,
	gitPullRequest,
	play,
	bookOpen,
};

function getNavTabsConfig( issuesCount = 0, pullsCount = 0 ) {
	return [
		{ id: TAB_IDS.CODE, label: 'Code', iconName: 'code' },
		{ id: TAB_IDS.ISSUES, label: 'Issues', iconName: 'circleDot', badge: issuesCount },
		{ id: TAB_IDS.PULLS, label: 'Pull requests', iconName: 'gitPullRequest', badge: pullsCount },
		{ id: 'actions', label: 'Actions', iconName: 'play' },
		{ id: 'wiki', label: 'Wiki', iconName: 'bookOpen' },
	];
}

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
					const iconRenderer = TAB_ICONS[ tab.iconName ] || tab.icon || code;

					return `
						<button data-tab="${ tab.id }" class="nav-tab-btn flex items-center gap-2 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors ${ borderClass }">
							${ iconRenderer( ICON_SIZE, 'shrink-0' ) }
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

export {
	getNavTabsConfig,
	NavTabs,
};

export default NavTabs;
