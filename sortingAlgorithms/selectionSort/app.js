const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let temp = array[i];
		let index = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[index]) {
				index = j; // Keep track of index if current is lower than what we had previously
			}
		}
		array[i] = array[index];
		array[index] = temp;
	}
}
