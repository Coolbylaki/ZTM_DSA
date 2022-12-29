class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this.printList();
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this.printList();
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	traverseToIndex(index) {
		if (isNaN(index)) {
			throw new Error("You must enter a valid index!");
		}
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	insert(index, value) {
		// Check parameters!
		if (index === 0) {
			this.prepend(value);
			return this.printList();
		} else if (index >= this.length) {
			this.append(value);
			return this.printList();
		}
		const newNode = new Node(value);
		const leaderNode = this.traverseToIndex(index - 1);
		const holdingPointer = leaderNode.next;
		leaderNode.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	remove(index) {
		if (index < 0 || isNaN(index) || index >= this.length) {
			throw new Error("You must enter a valid index!");
		}
		if (index === 0) {
			this.length--;
			return (this.head = this.head.next);
		}
		const leaderNode = this.traverseToIndex(index - 1);
		const unwantedNode = leaderNode.next;
		leaderNode.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	reverse() {
		if (this.length === 1) {
			return this.printList();
		}
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this.printList();
	}
}

const linkedList = new LinkedList(10);

// Adding to end O(1)
linkedList.append(5);
linkedList.append(16);

// Adding to start is O(1)
linkedList.prepend(1);

// Inserting at index is O(n)
linkedList.insert(2, 99);
linkedList.insert(20, 88);

// Removing at index is O(n)
linkedList.remove(2);
linkedList.remove(2);
