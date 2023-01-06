// Write a JavaScript program to get the integers in range (x, y).  Example: range(2, 9). Expected Output: [3, 4, 5, 6, 7, 8]

function recursiveRange(x, y) {
	debugger;
	if (y - x === 2) {
		return [x + 1];
	} else {
		const array = recursiveRange(x, y - 1);
		array.push(y - 1);
		return array;
	}
}
