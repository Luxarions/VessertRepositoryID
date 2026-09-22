/**
 * @module constants
 * @description Global constants shared across Vessert modules.
 * Direct equivalent to Three.js constants.js.
 * @author prssbayu-oss
 */

const VERSION = '0.1.0';
const DEFAULT_BRANCH = 'main';
const DEFAULT_TAB = 'code';
const DEFAULT_TEMPLATE_REPO = 'google-gemini/aistudio-repository-template';

const ICON_SIZE_XS = 12;
const ICON_SIZE_CHEVRON = 13;
const ICON_SIZE_SMALL = 14;
const ICON_SIZE = 16;
const ICON_STROKE_WIDTH = 2;

const TITLE_SEPARATOR = ' / ';
const ELLIPSIS = '...';
const COPY_FEEDBACK_MS = 2000;

const GITHUB_BASE_URL = 'https://github.com';
const CLONE_URL_SUFFIX = '.git';
const CLI_CLONE_PREFIX = 'gh repo clone';

const TAB_IDS = {
	CODE: 'code',
	ISSUES: 'issues',
	PULLS: 'pulls',
	MORE: 'more',
};

const FILE_TYPES = {
	FILE: 'file',
	DIR: 'dir',
};

const LOG_TYPES = {
	LOG: 'log',
	INFO: 'info',
	SUCCESS: 'success',
	WARN: 'warn',
	ERROR: 'error',
	TABLE: 'table',
};

const JS_KEYWORDS = [
	'class', 'constructor', 'this', 'new',
	'export', 'import', 'from', 'default',
	'const', 'let', 'var',
	'function', 'return',
	'if', 'else',
	'typeof',
];

const JS_BUILT_INS = [
	'Map', 'Date', 'String',
	'performance', 'JSON', 'console', 'window',
];

export {
	VERSION,
	DEFAULT_BRANCH,
	DEFAULT_TAB,
	DEFAULT_TEMPLATE_REPO,
	ICON_SIZE_XS,
	ICON_SIZE_CHEVRON,
	ICON_SIZE_SMALL,
	ICON_SIZE,
	ICON_STROKE_WIDTH,
	TITLE_SEPARATOR,
	ELLIPSIS,
	COPY_FEEDBACK_MS,
	GITHUB_BASE_URL,
	CLONE_URL_SUFFIX,
	CLI_CLONE_PREFIX,
	TAB_IDS,
	FILE_TYPES,
	LOG_TYPES,
	JS_KEYWORDS,
	JS_BUILT_INS,
};
