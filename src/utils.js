/**
 * @module utils
 * @description Generic utility functions shared across Vessert modules.
 * Direct equivalent to Three.js utils.js.
 * @author prssbayu-oss
 */

import { ELLIPSIS } from './constants.js';

export function escapeHtml( text ) {
	if ( typeof text !== 'string' ) return '';

	return text
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' )
		.replace( /"/g, '&quot;' )
		.replace( /'/g, '&#039;' );
}

export function truncate( text, maxLength, ellipsis = ELLIPSIS ) {
	if ( text.length <= maxLength ) return text;
	return text.slice( 0, maxLength - ellipsis.length ) + ellipsis;
}

export function pluralize( count, singular, plural ) {
	const word = count === 1 ? singular : ( plural ?? singular + 's' );
	return `${ count } ${ word }`;
}

export default {
	escapeHtml,
	truncate,
	pluralize,
};
