/**
 * @module Core/State
 * @description Centralized mutable state for the Vessert application.
 * @author prssbayu-oss
 */

import { DEFAULT_BRANCH, DEFAULT_TAB } from '../constants.js';
import { initialRepoData } from '../data/repoData.js';

export const state = {
	activeTab: DEFAULT_TAB,
	currentBranch: DEFAULT_BRANCH,
	selectedFile: null,
	pathSegments: [],
	branchDropdownOpen: false,
	codeDropdownOpen: false,
	searchModalOpen: false,
	historyModalOpen: false,
	branchSearchQuery: '',
	activeCloneTab: 'https',
	copied: false,
	isStarred: false,
	isWatching: false,
	activeReadmeTab: 'readme',
	viewAllFiles: false,
	repo: { ...initialRepoData },
	consoleLogs: [],
	isConsoleOpen: false,
};

export function getState() {
	return state;
}

export function resetState() {
	Object.assign( state, {
		activeTab: DEFAULT_TAB,
		currentBranch: DEFAULT_BRANCH,
		selectedFile: null,
		pathSegments: [],
		branchDropdownOpen: false,
		codeDropdownOpen: false,
		searchModalOpen: false,
		historyModalOpen: false,
		branchSearchQuery: '',
		activeCloneTab: 'https',
		copied: false,
		isStarred: false,
		isWatching: false,
		activeReadmeTab: 'readme',
		viewAllFiles: false,
		repo: { ...initialRepoData },
		consoleLogs: [],
		isConsoleOpen: false,
	} );
}

export default {
	state,
	getState,
	resetState,
};
