/**
 * @module constants
 * @description Global constants shared across Vessert modules.
 * Direct equivalent to Three.js constants.js.
 * @author prssbayu-oss
 */

export const VERSION = '0.1.0';
export const DEFAULT_BRANCH = 'main';
export const DEFAULT_TAB = 'code';
export const DEFAULT_TEMPLATE_REPO = 'google-gemini/aistudio-repository-template';

export const ICON_SIZE_XS = 12;
export const ICON_SIZE_CHEVRON = 13;
export const ICON_SIZE_SMALL = 14;
export const ICON_SIZE = 16;
export const ICON_STROKE_WIDTH = 2;

export const TITLE_SEPARATOR = ' / ';
export const ELLIPSIS = '...';
export const COPY_FEEDBACK_MS = 2000;

export const GITHUB_BASE_URL = 'https://github.com';
export const CLONE_URL_SUFFIX = '.git';
export const CLI_CLONE_PREFIX = 'gh repo clone';

export const TAB_IDS = {
	CODE: 'code',
	ISSUES: 'issues',
	PULLS: 'pulls',
	MORE: 'more',
};

export const FILE_TYPES = {
	FILE: 'file',
	DIR: 'dir',
};

export const LOG_TYPES = {
	LOG: 'log',
	INFO: 'info',
	SUCCESS: 'success',
	WARN: 'warn',
	ERROR: 'error',
	TABLE: 'table',
};

export const JS_KEYWORDS = [
	'class', 'constructor', 'this', 'new',
	'export', 'import', 'from', 'default',
	'const', 'let', 'var',
	'function', 'return',
	'if', 'else',
	'typeof',
];

export const JS_BUILT_INS = [
	'Map', 'Date', 'String',
	'performance', 'JSON', 'console', 'window',
];
