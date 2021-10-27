class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	insert(data) {
		if (this.head == null) {
			this.head = new LinkedListNode(data);
			this.size++;
		} else {
			let current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = new LinkedListNode(data);
			this.size++;
		}
	}
	remove(key) {
		this.size--;
		let current = this.head;
		let prev = null;
		while (current != null) {
			if (current.data.key == key) {
				if (prev == null) {
					current.data = null;
					this.head = current.next;
					return;
				} else if (current.next == null) {
					current.data = null;
					prev.next = null;
					return;
				} else {
					current.data = null;
					prev.next = current.next;
					return;
				}
			} else {
				prev = current;
				current = current.next;
			}
		}
		// return null;
	}
	contains(key) {
		let current = this.head;
		while (current != null) {
			if (current.data.key == key) {
				return current.data;
			} else {
				current = current.next;
			}
		}
		return null;
	}
}

// const linkedList = new LinkedList();
// linkedList.insert('test');
// linkedList.insert('test2');
// linkedList.insert('test3');
// // console.log(linkedList);
// // console.log(linkedList.remove('test'));
// linkedList.remove('test3');
// // console.log(linkedList.remove('test2'));
// // console.log(linkedList.remove('test3'));
// console.log(linkedList);
