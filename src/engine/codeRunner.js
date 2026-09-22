/**
 * @module Engine/CodeRunner
 * @description Safe in-memory JavaScript execution with captured console output.
 * @author prssbayu-oss
 */

import { LOG_TYPES } from '../Constants.js';

function createSandboxConsole( appendLog ) {

	return {
		log: ( ...args ) => appendLog( LOG_TYPES.LOG, args.join( ' ' ) ),
		info: ( ...args ) => appendLog( LOG_TYPES.INFO, args.join( ' ' ) ),
		warn: ( ...args ) => appendLog( LOG_TYPES.WARN, args.join( ' ' ) ),
		error: ( ...args ) => appendLog( LOG_TYPES.ERROR, args.join( ' ' ) ),
		success: ( ...args ) => appendLog( LOG_TYPES.SUCCESS, args.join( ' ' ) ),
		table: ( data ) => {

			try {

				appendLog( LOG_TYPES.TABLE, JSON.stringify( data, null, 2 ) );

			} catch {

				appendLog( LOG_TYPES.TABLE, String( data ) );

			}

		},
	};

}

function executeCode( code, onLog ) {

	const logs = [];

	const appendLog = ( type, message ) => {

		const entry = { type, message, time: new Date().toLocaleTimeString() };
		logs.push( entry );
		onLog?.( entry );

	};

	const fakeConsole = createSandboxConsole( appendLog );

	try {

		const runner = new Function(
			'console',
			`"use strict";
			class CustomConsole {
				constructor(options = {}) {
					this.prefix = options.prefix || '[Custom]';
					this.timestamps = options.timestamps !== false;
				}
				format(level, msg) {
					const time = this.timestamps ? '[' + new Date().toLocaleTimeString() + '] ' : '';
					return time + this.prefix + ' [' + level.toUpperCase() + '] ' + msg;
				}
				log(...args) { console.log(this.format('log', args.join(' '))); }
				info(...args) { console.info(this.format('info', args.join(' '))); }
				success(...args) { console.success(this.format('success', args.join(' '))); }
				warn(...args) { console.warn(this.format('warn', args.join(' '))); }
				error(...args) { console.error(this.format('error', args.join(' '))); }
			}
			${ code.replace( /export\s+default\s+defaultConsole;?/g, '' ).replace( /export\s+/g, '' ) }`
		);

		runner( fakeConsole );

	} catch ( err ) {

		appendLog( LOG_TYPES.ERROR, `${ err.name }: ${ err.message }` );

	}

	return logs;

}

export {
	createSandboxConsole,
	executeCode,
};
