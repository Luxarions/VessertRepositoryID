/**
 * @module Engine/Counters
 * @description Barrel re-export for counter calculation engines.
 * @author prssbayu-oss
 */

import { calculateStarToggle } from './counters/starToggle.js';
import { calculateForkIncrement } from './counters/forkToggle.js';
import { calculateWatchToggle } from './counters/watchToggle.js';

export {
	calculateStarToggle,
	calculateForkIncrement,
	calculateWatchToggle,
};
