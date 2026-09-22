/**
 * @module utils
 * @description Generic utility functions shared across Vessert modules.
 * Direct equivalent to Three.js utils.js.
 * @author prssbayu-oss
 */

import { ELLIPSIS } from './constants.js';

/**
 * Escapes unsafe HTML characters in a string to prevent XSS.
 *
 * @param {string} text - Raw string to escape.
 * @return {string} Escaped HTML-safe string.
 */
function escapeHtml( text ) {

	if ( typeof text !== 'string' ) return '';

	return text
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' )
		.replace( /"/g, '&quot;' )
		.replace( /'/g, '&#039;' );

}

/**
 * Truncates a string to a given maximum length, appending an ellipsis indicator.
 *
 * @param {string} text - The input string to truncate.
 * @param {number} maxLength - Maximum allowable string character length.
 * @param {string} [ellipsis=ELLIPSIS] - Custom ellipsis string.
 * @return {string} Truncated string with ellipsis.
 */
function truncate( text, maxLength, ellipsis = ELLIPSIS ) {

	if ( typeof text !== 'string' ) return '';

	if ( text.length <= maxLength ) return text;

	return text.slice( 0, Math.max( 0, maxLength - ellipsis.length ) ) + ellipsis;

}

/**
 * Formats a count with appropriate singular or plural noun suffix.
 *
 * @param {number} count - The item count number.
 * @param {string} singular - The singular noun form.
 * @param {string} [plural] - Optional explicit plural form.
 * @return {string} Combined string like "1 star" or "12 stars".
 */
function pluralize( count, singular, plural ) {

	const word = count === 1 ? singular : ( plural ?? singular + 's' );

	return `${ count } ${ word }`;

}

/**
 * Clamps a numerical value within the inclusive range [min, max].
 *
 * @param {number} value - Value to constrain.
 * @param {number} min - Lower bound.
 * @param {number} max - Upper bound.
 * @return {number} Clamped value.
 */
function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

/**
 * Internal cache for tracking warning messages to prevent duplicate console warnings.
 *
 * @private
 * @type {Object<string, boolean>}
 */
const _cache = {};

/**
 * Logs a warning message with the 'VESSERT.' prefix.
 *
 * @param {...any} params - The warning message components.
 */
function warn( ...params ) {

	const message = 'VESSERT.' + params.shift();

	console.warn( message, ...params );

}

/**
 * Logs a warning message only once, preventing duplicate warnings in the console.
 *
 * @param {...any} params - The warning message components.
 */
function warnOnce( ...params ) {

	const message = params.join( ' ' );

	if ( message in _cache ) return;

	_cache[ message ] = true;

	warn( ...params );

}

/**
 * Yields execution to the main thread to allow rendering and other microtasks.
 *
 * @return {Promise<void>}
 */
function yieldToMain() {

	if ( typeof self !== 'undefined' && typeof self.scheduler !== 'undefined' && typeof self.scheduler.yield !== 'undefined' ) {

		return self.scheduler.yield();

	}

	return new Promise( ( resolve ) => {

		requestAnimationFrame( resolve );

	} );

}

export {
	escapeHtml,
	truncate,
	pluralize,
	clamp,
	warn,
	warnOnce,
	yieldToMain,
};

export default {
	escapeHtml,
	truncate,
	pluralize,
	clamp,
	warn,
	warnOnce,
	yieldToMain,
};
