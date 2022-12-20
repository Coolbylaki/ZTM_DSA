// Given 2 arrays, create a function that let's a user know(true/false) whether these two arrays contain any common items
// For example:

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
// Should return false

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];
// Should return true

// We have 2 parameters - They are arrays - And they have no size limit
// First thing that comes to my mind is:
// Nested loops are O(a*b) time complexity because they can be different sizes. If first is bigger than it's O(n^2)
function containsCommonItem(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				console.log("true");
				return true;
			}
		}
	}
	console.log("false");
	return false;
}

// We can create and object like:
// array1 => {
//    a: true,
//    b: true,
//    c: true,
//    x: true
// }

// Use the object with array2 and see if the property exist
// Our aim here is to get time complexity O(a + b)
function fasterContainsCommonItem(arr1, arr2) {
	// First we make an object out of first array
	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}
	// Next we want to loop through second array and check does it exist in object
	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			console.log("true");
			return true;
		}
	}
	console.log("false");
	return false;
}
// We can talk about how can we break this code like example not receiving second input

// I would google specific methods on arrays to make this code more readable like so:
function readableContainsCommonItem(arr1, arr2) {
	return arr1.some((item) => arr2.includes(item));
}

// If we talk about space complexity here:
// In first function we don't make any new places in memory and we have space complexity of O(1)
// In second function we are creating an object and space complexity is O(a)
// In third function we also have O(1)

// On the end we can mention that we can modularize our code
