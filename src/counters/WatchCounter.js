/**
 * @module Counters/WatchCounter
 * @description Watch counter class inheriting from Counter.
 * @author prssbayu-oss
 */

import { Counter } from './Counter.js';

export class WatchCounter extends Counter {
	constructor( initialValue = 0, isWatching = false ) {
		super( initialValue );
		this.isWatching = Boolean( isWatching );
	}

	toggle() {
		if ( this.isWatching ) {
			this.value = Math.max( 0, this.value - 1 );
			this.isWatching = false;
		} else {
			this.value += 1;
			this.isWatching = true;
		}
		return { count: this.value, isWatching: this.isWatching };
	}
}

export function calculateWatchToggle( currentWatchers, isCurrentlyWatching ) {
	const counter = new WatchCounter( currentWatchers, isCurrentlyWatching );
	return counter.toggle();
}

export default WatchCounter;
