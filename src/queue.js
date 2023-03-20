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
    this.size = 0;
  }

  // enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  // dequeue
  dequeue() {
    if (!this.first) return null;
    const removeNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    removeNode.next = null;
    this.size--;
    return removeNode.value;
  }
}

module.exports = { Queue };

