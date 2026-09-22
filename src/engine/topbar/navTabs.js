/**
 * @module Engine/Topbar/NavTabs
 * @description Navigation tabs configuration.
 * @author prssbayu-oss
 */

import { TAB_IDS } from '../../Constants.js';

function getNavTabsConfig( issuesCount = 0, pullsCount = 0 ) {

	return [
		{ id: TAB_IDS.CODE, label: 'Code', iconName: 'code' },
		{ id: TAB_IDS.ISSUES, label: 'Issues', iconName: 'circleDot', badge: issuesCount },
		{ id: TAB_IDS.PULLS, label: 'Pull requests', iconName: 'gitPullRequest', badge: pullsCount },
		{ id: 'actions', label: 'Actions', iconName: 'play' },
		{ id: 'wiki', label: 'Wiki', iconName: 'bookOpen' },
	];

}

export { getNavTabsConfig };
