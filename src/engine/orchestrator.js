/**
 * @module Engine/Orchestrator
 * @description State mutation actions that bridge engine logic to state.
 * @author prssbayu-oss
 */

import { state } from './state.js';
import { calculateStarToggle } from './counters/starToggle.js';
import { calculateForkIncrement } from './counters/forkToggle.js';
import { calculateWatchToggle } from './counters/watchToggle.js';
import { getFileByPath } from './fileTree.js';
import { executeCode } from './codeRunner.js';

let renderCallback = null;

function onStateChange( cb ) {

	renderCallback = cb;

}

function notify() {

	renderCallback?.( state );

}

function toggleStar() {

	const { count, isStarred } = calculateStarToggle( state.repo.stars, state.isStarred );
	state.repo.stars = count;
	state.isStarred = isStarred;
	notify();

}

function toggleFork() {

	state.repo.forks = calculateForkIncrement( state.repo.forks );
	notify();

}

function toggleWatch() {

	const { count, isWatching } = calculateWatchToggle( state.repo.watching, state.isWatching );
	state.repo.watching = count;
	state.isWatching = isWatching;
	notify();

}

function setActiveTab( tabId ) {

	state.activeTab = tabId;
	notify();

}

function setCurrentBranch( branch ) {

	state.currentBranch = branch;
	state.branchDropdownOpen = false;
	notify();

}

function openFile( path ) {

	const file = getFileByPath( state.repo.files, path );

	if ( file ) {

		state.selectedFile = file;
		state.consoleLogs = [];
		state.isConsoleOpen = false;
		notify();

	}

}

function closeFile() {

	state.selectedFile = null;
	state.consoleLogs = [];
	state.isConsoleOpen = false;
	notify();

}

function navigateDir( dirName ) {

	state.pathSegments.push( dirName );
	notify();

}

function navigateUp( index ) {

	state.pathSegments = state.pathSegments.slice( 0, index + 1 );
	state.selectedFile = null;
	notify();

}

function navigateRoot() {

	state.pathSegments = [];
	state.selectedFile = null;
	notify();

}

function setPathSegments( segments ) {

	state.pathSegments = [ ...segments ];
	state.selectedFile = null;
	notify();

}

function toggleBranchDropdown() {

	state.branchDropdownOpen = ! state.branchDropdownOpen;
	state.codeDropdownOpen = false;
	notify();

}

function toggleCodeDropdown() {

	state.codeDropdownOpen = ! state.codeDropdownOpen;
	state.branchDropdownOpen = false;
	notify();

}

function setBranchSearchQuery( query ) {

	state.branchSearchQuery = query;
	notify();

}

function setActiveCloneTab( tab ) {

	state.activeCloneTab = tab;
	notify();

}

function setCopied( value ) {

	state.copied = value;
	notify();

}

function toggleSearchModal() {

	state.searchModalOpen = ! state.searchModalOpen;
	notify();

}

function toggleHistoryModal() {

	state.historyModalOpen = ! state.historyModalOpen;
	notify();

}

function toggleConsole() {

	state.isConsoleOpen = ! state.isConsoleOpen;
	notify();

}

function toggleViewAllFiles() {

	state.viewAllFiles = ! state.viewAllFiles;
	notify();

}

function setActiveReadmeTab( tab ) {

	state.activeReadmeTab = tab;
	notify();

}

function runCurrentFileCode() {

	if ( ! state.selectedFile ) return;

	state.isConsoleOpen = true;
	state.consoleLogs = [];

	executeCode( state.selectedFile.content, ( entry ) => {

		state.consoleLogs.push( entry );
		notify();

	} );

	notify();

}

const Orchestrator = {
	onStateChange,
	notify,
	toggleStar,
	toggleFork,
	toggleWatch,
	setActiveTab,
	setCurrentBranch,
	openFile,
	closeFile,
	navigateDir,
	navigateUp,
	navigateRoot,
	setPathSegments,
	toggleBranchDropdown,
	toggleCodeDropdown,
	setBranchSearchQuery,
	setActiveCloneTab,
	setCopied,
	toggleSearchModal,
	toggleHistoryModal,
	toggleConsole,
	toggleViewAllFiles,
	setActiveReadmeTab,
	runCurrentFileCode,
};

export {
	Orchestrator,
	onStateChange,
	notify,
	toggleStar,
	toggleFork,
	toggleWatch,
	setActiveTab,
	setCurrentBranch,
	openFile,
	closeFile,
	navigateDir,
	navigateUp,
	navigateRoot,
	setPathSegments,
	toggleBranchDropdown,
	toggleCodeDropdown,
	setBranchSearchQuery,
	setActiveCloneTab,
	setCopied,
	toggleSearchModal,
	toggleHistoryModal,
	toggleConsole,
	toggleViewAllFiles,
	setActiveReadmeTab,
	runCurrentFileCode,
};
