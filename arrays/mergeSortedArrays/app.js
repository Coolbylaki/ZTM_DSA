// Take two sorted arrays as inputs and merge them to one big array
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

function betterMergeSortedArrays(arr1, arr2) {
	const mergedArray = [];
	let arrayOneItem = arr1[0];
	let arrayTwoItem = arr2[0];
	let i = 1;
	let j = 1;

	// Check the inputs
	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
	}

	while (arrayOneItem || arrayTwoItem) {
		if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
			mergedArray.push(arrayOneItem);
			arrayOneItem = arr1[i];
			i++;
		} else {
			mergedArray.push(arrayTwoItem);
			arrayTwoItem = arr2[j];
			j++;
		}
	}

	// I want to filter the duplicated items
	return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
}

console.log(betterMergeSortedArrays(array1, array2));
