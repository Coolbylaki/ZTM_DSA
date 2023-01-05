//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

function reverseStringRecursion(str) {
	if (str === "") {
		return "";
	} else {
		return reverseStringRecursion(str.substr(1)) + str.charAt(0);
	}
}
