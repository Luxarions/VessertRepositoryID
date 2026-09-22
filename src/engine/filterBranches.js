/**
 * @module Engine/FilterBranches
 * @description Branch filtering logic.
 * @author prssbayu-oss
 */

function filterBranches( branches, query ) {

	if ( ! query || query.trim() === '' ) {

		return [ ...branches ];

	}

	const normalized = query.toLowerCase().trim();
	return branches.filter( ( b ) => b.toLowerCase().includes( normalized ) );

}

export { filterBranches };
