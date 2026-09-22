/**
 * @module constants
 * @description Global constants shared across Vessert modules.
 * Direct equivalent to Three.js constants.js.
 * @author prssbayu-oss
 */

/**
 * The current library revision version.
 *
 * @type {string}
 * @constant
 */
export const REVISION = '0.1.0';

/**
 * Alias for library version matching REVISION.
 *
 * @type {string}
 * @constant
 */
export const VERSION = '0.1.0';

/**
 * Default git branch name for newly initialized repositories.
 *
 * @type {string}
 * @constant
 */
export const DEFAULT_BRANCH = 'main';

/**
 * Default active tab identifier for repository header navigation.
 *
 * @type {string}
 * @constant
 */
export const DEFAULT_TAB = 'code';

/**
 * Default template repository identifier.
 *
 * @type {string}
 * @constant
 */
export const DEFAULT_TEMPLATE_REPO = 'google-gemini/aistudio-repository-template';

/**
 * Extra small icon dimension in pixels.
 *
 * @type {number}
 * @constant
 */
export const ICON_SIZE_XS = 12;

/**
 * Icon dimension in pixels for dropdown chevrons.
 *
 * @type {number}
 * @constant
 */
export const ICON_SIZE_CHEVRON = 13;

/**
 * Small icon dimension in pixels.
 *
 * @type {number}
 * @constant
 */
export const ICON_SIZE_SMALL = 14;

/**
 * Standard default icon dimension in pixels.
 *
 * @type {number}
 * @constant
 */
export const ICON_SIZE = 16;

/**
 * Default SVG stroke width for vector icons.
 *
 * @type {number}
 * @constant
 */
export const ICON_STROKE_WIDTH = 2;

/**
 * Separator used when displaying owner and repository title strings.
 *
 * @type {string}
 * @constant
 */
export const TITLE_SEPARATOR = ' / ';

/**
 * Ellipsis indicator string.
 *
 * @type {string}
 * @constant
 */
export const ELLIPSIS = '...';

/**
 * Duration in milliseconds for clipboard copy feedback states.
 *
 * @type {number}
 * @constant
 */
export const COPY_FEEDBACK_MS = 2000;

/**
 * Official GitHub web application base URL.
 *
 * @type {string}
 * @constant
 */
export const GITHUB_BASE_URL = 'https://github.com';

/**
 * Git clone URL file extension suffix.
 *
 * @type {string}
 * @constant
 */
export const CLONE_URL_SUFFIX = '.git';

/**
 * Command prefix for GitHub CLI clone executions.
 *
 * @type {string}
 * @constant
 */
export const CLI_CLONE_PREFIX = 'gh repo clone';

/**
 * Navigation tab identifiers available on repository header.
 *
 * @type {ConstantsTabIds}
 * @constant
 */
export const TAB_IDS = {
	CODE: 'code',
	ISSUES: 'issues',
	PULLS: 'pulls',
	MORE: 'more',
};

/**
 * File system entry item types.
 *
 * @type {ConstantsFileTypes}
 * @constant
 */
export const FILE_TYPES = {
	FILE: 'file',
	DIR: 'dir',
};

/**
 * Execution console output log level types.
 *
 * @type {ConstantsLogTypes}
 * @constant
 */
export const LOG_TYPES = {
	LOG: 'log',
	INFO: 'info',
	SUCCESS: 'success',
	WARN: 'warn',
	ERROR: 'error',
	TABLE: 'table',
};

/**
 * Reserved JavaScript language syntax keywords highlighted by the code viewer.
 *
 * @type {Array<string>}
 * @constant
 */
export const JS_KEYWORDS = [
	'class', 'constructor', 'this', 'new',
	'export', 'import', 'from', 'default',
	'const', 'let', 'var',
	'function', 'return',
	'if', 'else',
	'typeof',
];

/**
 * JavaScript global runtime built-in objects recognized by the syntax highlighter.
 *
 * @type {Array<string>}
 * @constant
 */
export const JS_BUILT_INS = [
	'Map', 'Date', 'String',
	'performance', 'JSON', 'console', 'window',
];

/**
 * Represents the repository header tab navigation identifiers.
 *
 * @typedef {Object} ConstantsTabIds
 * @property {string} CODE - The Code tab.
 * @property {string} ISSUES - The Issues tab.
 * @property {string} PULLS - The Pull requests tab.
 * @property {string} MORE - The More options tab.
 */

/**
 * Represents file system node types.
 *
 * @typedef {Object} ConstantsFileTypes
 * @property {string} FILE - Regular file entity.
 * @property {string} DIR - Directory entity.
 */

/**
 * Represents execution console log severity levels.
 *
 * @typedef {Object} ConstantsLogTypes
 * @property {string} LOG - Standard output message.
 * @property {string} INFO - Informational message.
 * @property {string} SUCCESS - Successful operation message.
 * @property {string} WARN - Warning message.
 * @property {string} ERROR - Error failure message.
 * @property {string} TABLE - Formatted table output data.
 */
