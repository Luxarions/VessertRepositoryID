/**
 * @module Engine/Topbar
 * @description Barrel re-export for topbar engine modules.
 * @author prssbayu-oss
 */

import { getNavTabsConfig } from './topbar/navTabs.js';
import { formatRepoTitle, getVisibilityLabel } from './topbar/title.js';

export {
	getNavTabsConfig,
	formatRepoTitle,
	getVisibilityLabel,
};
