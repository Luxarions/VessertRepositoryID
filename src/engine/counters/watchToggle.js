/**
 * @module Engine/Counters/WatchToggle
 * @description Watch counter calculation logic.
 * @author prssbayu-oss
 */

function calculateWatchToggle( currentCount, isCurrentlyWatching ) {

	const isWatching = ! isCurrentlyWatching;
	const count = isCurrentlyWatching
		? Math.max( 0, currentCount - 1 )
		: currentCount + 1;

	return { count, isWatching };

}

export { calculateWatchToggle };
