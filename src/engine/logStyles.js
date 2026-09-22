/**
 * @module Engine/LogStyles
 * @description Color and border style definitions for console log levels.
 * @author prssbayu-oss
 */

import { LOG_TYPES } from '../Constants.js';

const LOG_STYLES = {
	[ LOG_TYPES.LOG ]: {
		color: 'text-[#c9d1d9]',
		border: 'border-l-2 border-[#30363d]',
	},
	[ LOG_TYPES.INFO ]: {
		color: 'text-[#58a6ff]',
		border: 'border-l-2 border-[#1f6feb]',
	},
	[ LOG_TYPES.SUCCESS ]: {
		color: 'text-[#3fb950]',
		border: 'border-l-2 border-[#238636]',
	},
	[ LOG_TYPES.WARN ]: {
		color: 'text-[#d29922]',
		border: 'border-l-2 border-[#9e6a03]',
	},
	[ LOG_TYPES.ERROR ]: {
		color: 'text-[#f85149]',
		border: 'border-l-2 border-[#da3633]',
	},
	[ LOG_TYPES.TABLE ]: {
		color: 'text-[#e6edf3]',
		border: 'border-l-2 border-[#388bfd]',
	},
};

const DEFAULT_LOG_STYLE = {
	color: 'text-[#c9d1d9]',
	border: 'border-l-2 border-[#30363d]',
};

function getLogStyle( type ) {

	return LOG_STYLES[ type ] ?? DEFAULT_LOG_STYLE;

}

export { getLogStyle };
