/**
 * @module Engine/State
 * @description Centralized mutable state for the Vessert application.
 * @author prssbayu-oss
 */

import { DEFAULT_BRANCH, DEFAULT_TAB } from '../Constants.js';
import { initialRepoData } from '../data/repoData.js';

const state = {
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
	repo: { ...initialRepoData },
	consoleLogs: [],
	isConsoleOpen: false,
};

function getState() {

	return state;

}

function resetState() {

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
		repo: { ...initialRepoData },
		consoleLogs: [],
		isConsoleOpen: false,
	} );

}

export {
	state,
	getState,
	resetState,
};
