export class LinkedListNode {
  value: any;
  next: LinkedListNode;
  constructor(value: any, next: LinkedListNode = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  private head: LinkedListNode;
  private tail: LinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value: any): this {
    const newNode = new LinkedListNode(value);

    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value: any): this {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  insert(value, index: number): this {
    if (index === 0) {
      return this.prepend(value);
    } else if (value < 0) {
      throw new Error("Index must >= 0");
    }

    let currentIndex = 1;
    let currentNode = this.head;
    const newNode = new LinkedListNode(value);

    while (currentNode) {
      if (currentIndex === index) break;
      currentIndex++;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    // check head
    if (this.head.value === value) {
      this.head = this.head.next;
      return this.head;
    }

    let deletedNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
        break;
      }

      currentNode = currentNode.next;
    }

    // checl tail
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const array = [];

    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  toString() {
    return this.toArray().toString();
  }
}

const list = new LinkedList();

list.append(1).append(2).append(3);

console.log(list.toString()); // 1,2,3
