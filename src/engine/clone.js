/**
 * @module Engine/Clone
 * @description Clone URLs and CLI command generators.
 * @author prssbayu-oss
 */

import {
	GITHUB_BASE_URL,
	CLONE_URL_SUFFIX,
	CLI_CLONE_PREFIX,
} from '../Constants.js';

function getHttpsCloneUrl( owner, repoName ) {

	return `${ GITHUB_BASE_URL }/${ owner }/${ repoName }${ CLONE_URL_SUFFIX }`;

}

function getCliCloneCommand( owner, repoName ) {

	return `${ CLI_CLONE_PREFIX } ${ owner }/${ repoName }`;

}

export {
	getHttpsCloneUrl,
	getCliCloneCommand,
};
