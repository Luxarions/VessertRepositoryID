/**
 * @module Counters/ForkCounter
 * @description Fork counter class inheriting from Counter.
 * @author prssbayu-oss
 */

import { Counter } from './Counter.js';

export class ForkCounter extends Counter {
	constructor( initialValue = 0 ) {
		super( initialValue );
	}

	increment() {
		this.value += 1;
		return this.value;
	}
}

export function calculateForkIncrement( currentForks ) {
	const counter = new ForkCounter( currentForks );
	return counter.increment();
}

export default ForkCounter;
