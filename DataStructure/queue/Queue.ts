class Queue {
  private elements: any[];

  constructor() {
    this.elements = [];
  }

  enqueue(value): this {
    this.elements.push(value);

    return this;
  }

  dequeue(): this {
    if (this.elements.length > 0) {
      this.elements.shift();
    }

    return this;
  }

  peek() {
    return this.elements[0];
  }

  toString() {
    return this.elements;
  }
}

const queue = new Queue();

queue.enqueue(1).enqueue(2).enqueue(3).dequeue();
console.log(queue.toString());
