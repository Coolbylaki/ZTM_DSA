class Stack {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
		return this;
	}

	pop() {
		this.array.pop();
		return this;
	}

	isEmpty() {
		if (this.array.length) {
			return false;
		} else {
			return true;
		}
	}
}

const myStack = new Stack();
