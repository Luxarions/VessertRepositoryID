/**
 * @module Counters/Counter
 * @description Base class for all numeric counters.
 * Demonstrates classical OOP inheritance hierarchy in Vessert.
 * @author prssbayu-oss
 */

class Counter {
	constructor( initialValue = 0 ) {
		this.value = Math.max( 0, Number( initialValue ) || 0 );
	}

	getValue() {
		return this.value;
	}

	setValue( val ) {
		this.value = Math.max( 0, Number( val ) || 0 );
		return this.value;
	}

	format() {
		if ( this.value >= 1000000 ) {
			return ( this.value / 1000000 ).toFixed( 1 ).replace( /\.0$/, '' ) + 'M';
		}
		if ( this.value >= 1000 ) {
			return ( this.value / 1000 ).toFixed( 1 ).replace( /\.0$/, '' ) + 'k';
		}
		return String( this.value );
	}
}

export { Counter };
export default Counter;
