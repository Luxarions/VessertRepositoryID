/**
 * @module Core/EventDispatcher
 * @description Classic EventDispatcher implementation following Three.js design.
 * Allows components and engines to subscribe and dispatch custom events.
 * @author prssbayu-oss
 */

export class EventDispatcher {
	constructor() {
		this._listeners = {};
	}

	addEventListener( type, listener ) {
		if ( ! this._listeners[ type ] ) {
			this._listeners[ type ] = [];
		}

		if ( ! this._listeners[ type ].includes( listener ) ) {
			this._listeners[ type ].push( listener );
		}
	}

	hasEventListener( type, listener ) {
		return Boolean( this._listeners[ type ] && this._listeners[ type ].includes( listener ) );
	}

	removeEventListener( type, listener ) {
		const listenerArray = this._listeners[ type ];
		if ( ! listenerArray ) return;

		const index = listenerArray.indexOf( listener );
		if ( index !== - 1 ) {
			listenerArray.splice( index, 1 );
		}
	}

	dispatchEvent( event ) {
		const listenerArray = this._listeners[ event.type ];
		if ( ! listenerArray ) return;

		event.target = this;
		const array = listenerArray.slice( 0 );

		for ( let i = 0, l = array.length; i < l; i ++ ) {
			array[ i ].call( this, event );
		}
	}
}

export default EventDispatcher;
