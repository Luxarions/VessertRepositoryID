/**
 * @module Files/FileTree
 * @description File tree traversal and navigation logic.
 * @author prssbayu-oss
 */

import { FILE_TYPES } from '../constants.js';

export function getFilesInDirectory( files, pathSegments = [] ) {
	if ( pathSegments.length === 0 ) {
		return files.filter( ( f ) => ! f.path.includes( '/' ) );
	}

	const prefix = pathSegments.join( '/' ) + '/';

	return files
		.filter( ( f ) => f.path.startsWith( prefix ) )
		.filter( ( f ) => {
			const relative = f.path.slice( prefix.length );
			return ! relative.includes( '/' );
		} );
}

export function getFileByPath( files, path ) {
	return files.find( ( f ) => f.path === path ) ?? null;
}

export function sortFiles( files ) {
	return [ ...files ].sort( ( a, b ) => {
		if ( a.type === FILE_TYPES.DIR && b.type !== FILE_TYPES.DIR ) return - 1;
		if ( a.type !== FILE_TYPES.DIR && b.type === FILE_TYPES.DIR ) return 1;
		return a.name.localeCompare( b.name );
	} );
}

export default {
	getFilesInDirectory,
	getFileByPath,
	sortFiles,
};
