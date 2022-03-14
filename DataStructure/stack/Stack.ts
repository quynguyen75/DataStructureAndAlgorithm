class Stack {
  private elements: any[];

  constructor() {
    this.elements = [];
  }

  push(value): this {
    this.elements.push(value);
    return this;
  }

  pop(): this {
    this.elements.pop();
    return this;
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  toString() {
    return this.elements;
  }
}

const stack = new Stack();

stack.push(1).push(2).push(3).pop();

console.log(stack.toString());
