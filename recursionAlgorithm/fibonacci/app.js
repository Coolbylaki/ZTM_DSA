// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		const fibonacci = arr[i - 1] + arr[i - 2];
		arr.push(fibonacci);
	}
	return arr[n];
}

function fibonacciRecursive(n) {
	if (n < 2) {
		return n;
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
