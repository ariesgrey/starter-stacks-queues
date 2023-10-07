// Creates a node containing the data and a reference to the next item
class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	/* Inserts data onto the top of the stack */
	push(value) {
		// Insert a new node with the given data at the top, and set 'next' to point to the top
		this.top = new Node(value, this.top);
		// Return the stack
		return this;
	}

	/* Removes data from the top of the stack */
	pop() {
		// Declare variable 'popped' set to the top (node to be removed)
		const popped = this.top;
		// Set the top to the following node, 'popped.next'
		this.top = popped.next;
		// Return the removed data
		return popped.value;
	}
}
