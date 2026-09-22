/**
 * @module Repo/Clone
 * @description Clone URLs and CLI command generators for repository.
 * @author prssbayu-oss
 */

import {
	GITHUB_BASE_URL,
	CLONE_URL_SUFFIX,
	CLI_CLONE_PREFIX,
} from '../constants.js';

export function getHttpsCloneUrl( owner, repoName ) {
	return `${ GITHUB_BASE_URL }/${ owner }/${ repoName }${ CLONE_URL_SUFFIX }`;
}

export function getCliCloneCommand( owner, repoName ) {
	return `${ CLI_CLONE_PREFIX } ${ owner }/${ repoName }`;
}

export default {
	getHttpsCloneUrl,
	getCliCloneCommand,
};
