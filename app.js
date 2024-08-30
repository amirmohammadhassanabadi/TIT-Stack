class StackOverflowError extends Error {
  constructor(message) {
    super(message);
    this.name = "StackOverflowError";
  }
}

class StackUnderflowError extends Error {
  constructor(message) {
    super(message);
    this.name = "StackUnderflowError";
  }
}

class Stack {
  constructor(capacity = Infinity) {
    this.data = [];
    this.index = 0;
    this.capacity = capacity;
  }

  push(item) {
    if (this.index >= this.capacity) {
      throw new StackOverflowError(
        `Stack overflow: cannot push ${item}, stack is full.`
      );
    }
    this.data.push(item);
    console.log(`pushing to stack: ${item}`);
    this.index++;
  }

  pop() {
    if (this.index > 0) {
      this.index--;
      const item = this.data[this.index];
      this.data.pop(); // Removes the last element
      console.log(`popping: ${item}`);
      return item;
    } else {
      throw new StackUnderflowError(
        "Stack underflow: cannot pop, stack is empty."
      );
    }
  }

  peek() {
    if (this.index > 0) {
      return this.data[this.index - 1];
    } else {
      throw new StackUnderflowError(
        "Stack underflow: cannot peek, stack is empty."
      );
    }
  }

  clear() {
    this.data = [];
    this.index = 0;
    console.log("Stack cleared.");
  }

  length() {
    return this.index;
  }

  isEmpty() {
    return this.index === 0;
  }

  isFull() {
    return this.index >= this.capacity;
  }
}

module.exports = Stack;
