function memoizedAddTo80() {
	let cache = {};
	return function (n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log("Example of long time!");
			cache[n] = n + 80;
			return cache[n];
		}
	};
}

const memoized = memoizedAddTo80();
