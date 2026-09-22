/**
 * @module Engine/Topbar/Title
 * @description Repository title formatting logic.
 * @author prssbayu-oss
 */

import { TITLE_SEPARATOR } from '../../Constants.js';

function formatRepoTitle( owner, repoName, separator = TITLE_SEPARATOR ) {

	if ( ! owner && ! repoName ) return '';
	if ( ! owner ) return repoName;
	if ( ! repoName ) return owner;
	return `${ owner }${ separator }${ repoName }`;

}

function getVisibilityLabel( isPrivate ) {

	return isPrivate ? 'Private' : 'Public';

}

export {
	formatRepoTitle,
	getVisibilityLabel,
};
