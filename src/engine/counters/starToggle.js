/**
 * @module Engine/Counters/StarToggle
 * @description Star/unstar counter calculation logic.
 * @author prssbayu-oss
 */

function calculateStarToggle( currentCount, isCurrentlyStarred ) {

	const isStarred = ! isCurrentlyStarred;
	const count = isCurrentlyStarred
		? Math.max( 0, currentCount - 1 )
		: currentCount + 1;

	return { count, isStarred };

}

export { calculateStarToggle };
