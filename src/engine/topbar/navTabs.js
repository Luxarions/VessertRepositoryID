/**
 * @module Engine/Topbar/NavTabs
 * @description Navigation tabs configuration.
 * @author prssbayu-oss
 */

import { TAB_IDS } from '../../Constants.js';
import { code, circleDot, gitPullRequest, play, bookOpen } from '../../icons.js';

function getNavTabsConfig( issuesCount = 0, pullsCount = 0 ) {

	return [
		{ id: TAB_IDS.CODE, label: 'Code', icon: code },
		{ id: TAB_IDS.ISSUES, label: 'Issues', icon: circleDot, badge: issuesCount },
		{ id: TAB_IDS.PULLS, label: 'Pull requests', icon: gitPullRequest, badge: pullsCount },
		{ id: 'actions', label: 'Actions', icon: play },
		{ id: 'wiki', label: 'Wiki', icon: bookOpen },
	];

}

export { getNavTabsConfig };
