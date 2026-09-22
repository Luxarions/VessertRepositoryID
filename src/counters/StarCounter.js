/**
 * @module Counters/StarCounter
 * @description Star counter class inheriting from Counter.
 * Handles toggle state and increment/decrement.
 * @author prssbayu-oss
 */

import { Counter } from './Counter.js';

export class StarCounter extends Counter {
	constructor( initialValue = 0, isStarred = false ) {
		super( initialValue );
		this.isStarred = Boolean( isStarred );
	}

	toggle() {
		if ( this.isStarred ) {
			this.value = Math.max( 0, this.value - 1 );
			this.isStarred = false;
		} else {
			this.value += 1;
			this.isStarred = true;
		}
		return { count: this.value, isStarred: this.isStarred };
	}
}

export function calculateStarToggle( currentStars, isCurrentlyStarred ) {
	const counter = new StarCounter( currentStars, isCurrentlyStarred );
	return counter.toggle();
}

export default StarCounter;
