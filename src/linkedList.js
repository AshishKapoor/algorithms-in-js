class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFromTail() {
    if (this.head == null) return null;
    let removeNode;
    if (this.head === this.tail) {
      removeNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      removeNode = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.size--;
    return removeNode.value;
  }

  getSize() {
    return this.size;
  }
}

module.exports = { LinkedList };
