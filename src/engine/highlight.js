/**
 * @module Engine/Highlight
 * @description Pure JavaScript syntax highlighter.
 * @author prssbayu-oss
 */

import { escapeHtml } from '../Utils.js';
import { JS_KEYWORDS, JS_BUILT_INS } from '../Constants.js';

const KEYWORD_REGEX = new RegExp(
	`\\b(${ JS_KEYWORDS.join( '|' ) })\\b`,
	'g'
);

const BUILT_IN_REGEX = new RegExp(
	`\\b(${ JS_BUILT_INS.join( '|' ) })\\b`,
	'g'
);

function highlightCode( rawCode ) {

	const escaped = escapeHtml( rawCode );

	return escaped
		.replace( /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g, '<span class="text-[#8b949e] italic">$1</span>' )
		.replace( /(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="text-[#a5d6ff]">$1</span>' )
		.replace( KEYWORD_REGEX, '<span class="text-[#ff7b72] font-semibold">$1</span>' )
		.replace( BUILT_IN_REGEX, '<span class="text-[#79c0ff]">$1</span>' )
		.replace( /\b(\d+)\b/g, '<span class="text-[#79c0ff]">$1</span>' );

}

export { highlightCode };
