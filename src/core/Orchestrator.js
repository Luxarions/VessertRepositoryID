/**
 * @module Core/Orchestrator
 * @description Central controller bridging state mutations, event dispatching, and core logic.
 * Direct equivalent to Three.js core event dispatcher/scene manager.
 * @author prssbayu-oss
 */

import { state } from './State.js';
import { EventDispatcher } from './EventDispatcher.js';
import { calculateStarToggle } from '../counters/StarCounter.js';
import { calculateForkIncrement } from '../counters/ForkCounter.js';
import { calculateWatchToggle } from '../counters/WatchCounter.js';
import { getFileByPath } from '../files/FileTree.js';
import { executeCode } from '../files/CodeRunner.js';

class OrchestratorEngine extends EventDispatcher {
	constructor() {
		super();
		this.renderCallback = null;
		this.state = state;
	}

	subscribe( cb ) {
		this.addEventListener( 'change', ( e ) => cb( e.state ) );
		return () => this.removeEventListener( 'change', cb );
	}

	setBranch( branch ) {
		this.setCurrentBranch( branch );
	}

	onStateChange( cb ) {
		this.renderCallback = cb;
	}

	notify() {
		this.renderCallback?.( state );
		this.dispatchEvent( { type: 'change', state } );
	}

	toggleStar() {
		const { count, isStarred } = calculateStarToggle( state.repo.stars, state.isStarred );
		state.repo.stars = count;
		state.isStarred = isStarred;
		this.notify();
	}

	toggleFork() {
		state.repo.forks = calculateForkIncrement( state.repo.forks );
		this.notify();
	}

	toggleWatch() {
		const { count, isWatching } = calculateWatchToggle( state.repo.watching, state.isWatching );
		state.repo.watching = count;
		state.isWatching = isWatching;
		this.notify();
	}

	setActiveTab( tabId ) {
		state.activeTab = tabId;
		this.notify();
	}

	setCurrentBranch( branch ) {
		state.currentBranch = branch;
		state.branchDropdownOpen = false;
		this.notify();
	}

	openFile( path ) {
		const file = getFileByPath( state.repo.files, path );
		if ( file ) {
			state.selectedFile = file;
			state.consoleLogs = [];
			state.isConsoleOpen = false;
			this.notify();
		}
	}

	closeFile() {
		state.selectedFile = null;
		state.consoleLogs = [];
		state.isConsoleOpen = false;
		this.notify();
	}

	navigateDir( dirName ) {
		state.pathSegments.push( dirName );
		this.notify();
	}

	navigateUp( index ) {
		state.pathSegments = state.pathSegments.slice( 0, index + 1 );
		state.selectedFile = null;
		this.notify();
	}

	navigateRoot() {
		state.pathSegments = [];
		state.selectedFile = null;
		this.notify();
	}

	setPathSegments( segments ) {
		state.pathSegments = [ ...segments ];
		state.selectedFile = null;
		this.notify();
	}

	toggleBranchDropdown() {
		state.branchDropdownOpen = ! state.branchDropdownOpen;
		state.codeDropdownOpen = false;
		this.notify();
	}

	toggleCodeDropdown() {
		state.codeDropdownOpen = ! state.codeDropdownOpen;
		state.branchDropdownOpen = false;
		this.notify();
	}

	setBranchSearchQuery( query ) {
		state.branchSearchQuery = query;
		this.notify();
	}

	setActiveCloneTab( tab ) {
		state.activeCloneTab = tab;
		this.notify();
	}

	setCopied( value ) {
		state.copied = value;
		this.notify();
	}

	toggleSearchModal() {
		state.searchModalOpen = ! state.searchModalOpen;
		this.notify();
	}

	toggleHistoryModal() {
		state.historyModalOpen = ! state.historyModalOpen;
		this.notify();
	}

	toggleConsole() {
		state.isConsoleOpen = ! state.isConsoleOpen;
		this.notify();
	}

	toggleViewAllFiles() {
		state.viewAllFiles = ! state.viewAllFiles;
		this.notify();
	}

	setActiveReadmeTab( tab ) {
		state.activeReadmeTab = tab;
		this.notify();
	}

	runCurrentFileCode() {
		if ( ! state.selectedFile ) return;
		state.isConsoleOpen = true;
		state.consoleLogs = [];

		executeCode( state.selectedFile.content, ( entry ) => {
			state.consoleLogs.push( entry );
			this.notify();
		} );

		this.notify();
	}
}

export { OrchestratorEngine };
export const Orchestrator = new OrchestratorEngine();

export const onStateChange = ( cb ) => Orchestrator.onStateChange( cb );
export const notify = () => Orchestrator.notify();
export const toggleStar = () => Orchestrator.toggleStar();
export const toggleFork = () => Orchestrator.toggleFork();
export const toggleWatch = () => Orchestrator.toggleWatch();
export const setActiveTab = ( tab ) => Orchestrator.setActiveTab( tab );
export const setCurrentBranch = ( branch ) => Orchestrator.setCurrentBranch( branch );
export const openFile = ( path ) => Orchestrator.openFile( path );
export const closeFile = () => Orchestrator.closeFile();
export const navigateDir = ( dir ) => Orchestrator.navigateDir( dir );
export const navigateUp = ( idx ) => Orchestrator.navigateUp( idx );
export const navigateRoot = () => Orchestrator.navigateRoot();
export const setPathSegments = ( segs ) => Orchestrator.setPathSegments( segs );
export const toggleBranchDropdown = () => Orchestrator.toggleBranchDropdown();
export const toggleCodeDropdown = () => Orchestrator.toggleCodeDropdown();
export const setBranchSearchQuery = ( q ) => Orchestrator.setBranchSearchQuery( q );
export const setActiveCloneTab = ( tab ) => Orchestrator.setActiveCloneTab( tab );
export const setCopied = ( v ) => Orchestrator.setCopied( v );
export const toggleSearchModal = () => Orchestrator.toggleSearchModal();
export const toggleHistoryModal = () => Orchestrator.toggleHistoryModal();
export const toggleConsole = () => Orchestrator.toggleConsole();
export const toggleViewAllFiles = () => Orchestrator.toggleViewAllFiles();
export const setActiveReadmeTab = ( tab ) => Orchestrator.setActiveReadmeTab( tab );
export const runCurrentFileCode = () => Orchestrator.runCurrentFileCode();

export default Orchestrator;
