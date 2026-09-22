/**
 * @module Engine/Bottombar/RepoDetailMeta
 * @description Detail metadata helpers for repository info sections.
 * @author prssbayu-oss
 */

import { pluralize } from '../../Utils.js';

function formatStarsMeta( count ) {

	return pluralize( count, 'star' );

}

function formatWatchingMeta( count ) {

	return pluralize( count, 'watching' );

}

function formatForksMeta( count ) {

	return pluralize( count, 'fork' );

}

function formatTagsMeta( count ) {

	return pluralize( count, 'tag' );

}

export {
	formatStarsMeta,
	formatWatchingMeta,
	formatForksMeta,
	formatTagsMeta,
};
