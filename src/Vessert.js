/**
 * @module Vessert
 * @description Primary entry point for the Vessert library, modeled directly after Three.js.
 * Re-exports all core logic, class hierarchies, and UI layout renderers.
 * @author prssbayu-oss
 */

import * as VessertCore from './VessertCore.js';
import * as VessertUi from './VessertUi.js';
import { Orchestrator } from './core/Orchestrator.js';
import { RepoRenderer, mountApp, renderApp } from './renderers/renderers.js';

export * from './VessertCore.js';
export * from './VessertUi.js';

export {
	VessertCore,
	VessertUi,
	Orchestrator,
	RepoRenderer,
	mountApp,
	renderApp,
};

export default {
	VessertCore,
	VessertUi,
	Orchestrator,
	RepoRenderer,
	mountApp,
	renderApp,
};
