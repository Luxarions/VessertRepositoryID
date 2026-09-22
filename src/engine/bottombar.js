/**
 * @module Engine/Bottombar
 * @description Barrel re-export for bottombar engine modules.
 * @author prssbayu-oss
 */

import { getFooterLinks } from './bottombar/footerLinks.js';
import {
	formatStarsMeta,
	formatWatchingMeta,
	formatForksMeta,
	formatTagsMeta,
} from './bottombar/repoDetailMeta.js';

export {
	getFooterLinks,
	formatStarsMeta,
	formatWatchingMeta,
	formatForksMeta,
	formatTagsMeta,
};
