/**
 * @module Utils
 * @description Generic utility functions shared across Vessert modules.
 * @author prssbayu-oss
 */

import { ELLIPSIS } from './Constants.js';

function escapeHtml( text ) {

	if ( typeof text !== 'string' ) return '';

	return text
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' )
		.replace( /"/g, '&quot;' )
		.replace( /'/g, '&#039;' );

}

function truncate( text, maxLength, ellipsis = ELLIPSIS ) {

	if ( text.length <= maxLength ) return text;
	return text.slice( 0, maxLength - ellipsis.length ) + ellipsis;

}

function pluralize( count, singular, plural ) {

	const word = count === 1 ? singular : ( plural ?? singular + 's' );
	return `${ count } ${ word }`;

}

export {
	escapeHtml,
	truncate,
	pluralize,
};
