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

const Orchestrator = new OrchestratorEngine();

const onStateChange = ( cb ) => Orchestrator.onStateChange( cb );
const notify = () => Orchestrator.notify();
const toggleStar = () => Orchestrator.toggleStar();
const toggleFork = () => Orchestrator.toggleFork();
const toggleWatch = () => Orchestrator.toggleWatch();
const setActiveTab = ( tab ) => Orchestrator.setActiveTab( tab );
const setCurrentBranch = ( branch ) => Orchestrator.setCurrentBranch( branch );
const openFile = ( path ) => Orchestrator.openFile( path );
const closeFile = () => Orchestrator.closeFile();
const navigateDir = ( dir ) => Orchestrator.navigateDir( dir );
const navigateUp = ( idx ) => Orchestrator.navigateUp( idx );
const navigateRoot = () => Orchestrator.navigateRoot();
const setPathSegments = ( segs ) => Orchestrator.setPathSegments( segs );
const toggleBranchDropdown = () => Orchestrator.toggleBranchDropdown();
const toggleCodeDropdown = () => Orchestrator.toggleCodeDropdown();
const setBranchSearchQuery = ( q ) => Orchestrator.setBranchSearchQuery( q );
const setActiveCloneTab = ( tab ) => Orchestrator.setActiveCloneTab( tab );
const setCopied = ( v ) => Orchestrator.setCopied( v );
const toggleSearchModal = () => Orchestrator.toggleSearchModal();
const toggleHistoryModal = () => Orchestrator.toggleHistoryModal();
const toggleConsole = () => Orchestrator.toggleConsole();
const toggleViewAllFiles = () => Orchestrator.toggleViewAllFiles();
const setActiveReadmeTab = ( tab ) => Orchestrator.setActiveReadmeTab( tab );
const runCurrentFileCode = () => Orchestrator.runCurrentFileCode();

export {
	OrchestratorEngine,
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

export default Orchestrator;
