/**
 * @module Vessert
 * @description Centralized public interface for the Vessert library.
 * Bridges headless core, UI components, and the Orchestrator.
 * @author prssbayu-oss
 */

import * as VessertCore from './VessertCore.js';
import * as VessertUi from './VessertUi.js';
import { Orchestrator } from './engine/orchestrator.js';
import { mountApp } from './components/App.js';

export * from './VessertCore.js';
export * from './VessertUi.js';
export {
	VessertCore,
	VessertUi,
	Orchestrator,
	mountApp,
};

export default {
	VessertCore,
	VessertUi,
	Orchestrator,
	mountApp,
};
