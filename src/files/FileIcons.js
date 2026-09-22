/**
 * @module Files/FileIcons
 * @description Resolves SVG icon based on file name or type.
 * @author prssbayu-oss
 */

import { FILE_TYPES } from '../constants.js';
import { folder, fileCode, fileText, file } from '../icons.js';

function getFileIcon( item, size = 16 ) {
	if ( item.type === FILE_TYPES.DIR ) {
		return folder( size );
	}

	const name = item.name.toLowerCase();

	if ( name.endsWith( '.js' ) || name.endsWith( '.ts' ) || name.endsWith( '.jsx' ) || name.endsWith( '.tsx' ) ) {
		return fileCode( size );
	}

	if ( name.endsWith( '.md' ) || name.endsWith( '.txt' ) || name.endsWith( '.json' ) ) {
		return fileText( size );
	}

	return file( size );
}

export { getFileIcon };
export default getFileIcon;
