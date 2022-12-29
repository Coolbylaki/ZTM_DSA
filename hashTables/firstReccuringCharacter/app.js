// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// We can make an empty array and insert values into it if same value already exist then return the value else return undefined
function firstRepeated(array) {
	const emptyArray = [];
	for (let i = 0; i < array.length; i++) {
		if (emptyArray.includes(array[i])) {
			return array[i];
		}
		emptyArray.push(array[i]);
	}
	return undefined;
}

// Hashmap approach
function firstRepeatedZTM(array) {
	const hashMap = {};
	for (let i = 0; i < array.length; i++) {
		if (hashMap[array[i]] !== undefined) {
			return array[i];
		} else {
			hashMap[array[i]] = i;
		}
	}
	return undefined;
}
