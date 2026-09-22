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

function highlightCode( rawCode, language = '' ) {

	const escaped = escapeHtml( rawCode );

	if ( language === 'html' || /&lt;[\s\S]*?&gt;/.test( escaped ) ) {

		return escaped
			.replace( /(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-[#8b949e] italic">$1</span>' )
			.replace( /(&lt;!doctype\s+\w+&gt;|&lt;!DOCTYPE\s+\w+&gt;)/gi, '<span class="text-[#79c0ff] font-semibold">$1</span>' )
			.replace( /(&lt;\/?)([a-zA-Z0-9-]+)/g, '$1<span class="text-[#7ee787]">$2</span>' )
			.replace( /(=)(&quot;.*?&quot;|&#039;.*?&#039;)/g, '$1<span class="text-[#a5d6ff]">$2</span>' )
			.replace( /\s([a-zA-Z0-9-:]+)(?==)/g, ' <span class="text-[#79c0ff]">$1</span>' )
			.replace( /(&gt;|\/&gt;)/g, '<span class="text-[#7ee787]">$1</span>' )
			.replace( /(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="text-[#a5d6ff]">$1</span>' )
			.replace( KEYWORD_REGEX, '<span class="text-[#ff7b72] font-semibold">$1</span>' )
			.replace( BUILT_IN_REGEX, '<span class="text-[#79c0ff]">$1</span>' );

	}

	return escaped
		.replace( /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g, '<span class="text-[#8b949e] italic">$1</span>' )
		.replace( /(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="text-[#a5d6ff]">$1</span>' )
		.replace( KEYWORD_REGEX, '<span class="text-[#ff7b72] font-semibold">$1</span>' )
		.replace( BUILT_IN_REGEX, '<span class="text-[#79c0ff]">$1</span>' )
		.replace( /\b(\d+)\b/g, '<span class="text-[#79c0ff]">$1</span>' );

}

export { highlightCode };
