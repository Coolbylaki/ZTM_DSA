// Create a function that reverses a string:

const string = "Hi My name is Andrei";

// Let's try a brute force method
// Space complexity O(1)
// Time complexity O(n)
function reverse(str) {
	// First check the input
	if (!str || str.length < 2 || typeof str !== "string") {
		return "Hmm that's not a valid input";
	}
	let newString = "";
	for (let i = str.length - 1; i !== -1; i--) {
		const element = str[i];
		newString += element;
	}
	return newString;
}

// Simplified with built in methods
function reverseSimple(str) {
	return str.split("").reverse().join("");
}

// More modern way to reverse a string
const modernReverse = (str) => [...str].reverse().join("");
