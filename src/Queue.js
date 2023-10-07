// Creates a node containing the data and a reference to the next item
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	/* Inserts data at the end of the queue */
	enqueue(value) {
		// Create new node with the given data
		const newNode = new Node(value);

		// If the queue isn't empty...
		if (this.first) {
			// Set the 'next' value of the last node to the new node
			this.last.next = newNode;
		} else {
			// If the queue is empty, set the first node to be the new node
			this.first = newNode;
		}

		// Make the new node the last item on the queue
		this.last = newNode;
	}

	/* Removes data from the beginning of the queue */
	dequeue() {
		// If the queue isn't empty...
		if (this.first) {
			// Declare variable set to the first node (node to be removed)
			const dequeued = this.first;
			// Update 'first' pointer to point to the 'next' value of the dequeued node
			this.first = dequeued.next;

			// If the dequeued node is the last node in the queue...
			if (dequeued === this.last) {
				// Update the 'last' pointer to point to null
				this.last = null;
			}

			// Return the removed data
			return dequeued.value;
		}
	}
}
