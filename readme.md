# TIT-Stack

A JavaScript implementation of a stack data structure with custom error handling. This package provides basic stack operations including push, pop, peek, and additional features like capacity limits and stack clearing.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Introduction

The Simple Stack package offers a straightforward stack implementation with robust error handling. It includes operations to manage a stack data structure efficiently, with features to handle errors like stack overflow and underflow.

## Installation

You can install the package via npm. Run the following command in your terminal:

```bash
npm install TIT-Stack
```

## usage
Here's how to use the Simple Stack in your JavaScript project:
```javascript
const Stack = require('tit-stack');

// Create a stack with a capacity of 5
const myStack = new Stack(5);

// Push items onto the stack
myStack.push(10);
myStack.push(20);

// Peek at the top item
console.log(myStack.peek()); // Outputs: 20

// Pop an item from the stack
console.log(myStack.pop());  // Outputs: popping: 20

// Check if the stack is empty
console.log(myStack.isEmpty()); // Outputs: false

// Clear the stack
myStack.clear();
console.log(myStack.isEmpty()); // Outputs: true

// Get the current size of the stack
console.log(myStack.length()); // Outputs: 0

// Handle stack overflow and underflow
try {
  myStack.push(30);
  myStack.push(40);
  myStack.push(50);
  myStack.push(60);
  myStack.push(70);
  myStack.push(80); // This will throw a StackOverflowError
} catch (error) {
  console.error(error.message);
}

try {
  myStack.pop();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  myStack.pop(); // This will throw a StackUnderflowError
} catch (error) {
  console.error(error.message);
}
```

## features

- Push: Add an item to the top of the stack.
- Pop: Remove and return the top item from the stack.
- Peek: View the top item without removing it.
- Clear: Remove all items from the stack.
- Length: Get the current number of items in the stack.
- isEmpty: Check if the stack is empty.
- isFull: Check if the stack has reached its maximum capacity.
- Custom Error Handling: Includes custom errors for stack overflow and underflow conditions.

## error handling

- StackOverflowError: Thrown when attempting to push an item onto a full stack.
- StackUnderflowError: Thrown when attempting to pop an item from an empty stack.

## contributing

We welcome contributions to improve this project. To contribute:

1. Fork the repository: Click the "Fork" button on the top right of the repository page.
2. Clone your fork: Clone the forked repository to your local machine.
3. Create a branch: Create a new branch for your changes.
4. Make changes: Implement your changes and ensure they are tested.
5. Submit a pull request: Push your changes to your fork and create a pull request on the original repository.

## license
This project is licensed under the ISC License.

## author
- Full Name: Amirmohammad Hassanabadi
- Email: hasanabadi.am1380@gmail.com
- Github: https://github.com/amirmohammadhassanabadi