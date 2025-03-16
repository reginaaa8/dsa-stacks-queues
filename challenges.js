// Challenges 
// *****************************************************
// Browser back/forward

// Initialize backStack as an empty stack
// Initialize forwardStack as an empty stack
// Initialize currentPage as null

// FUNCTION visit(page):
//     IF currentPage is not null:
//         Push currentPage onto backStack
//     Set currentPage to page
//     Clear forwardStack

// FUNCTION goBack():
//     IF backStack is empty:
//         PRINT "No pages to go back to"
//         RETURN
//     Push currentPage onto forwardStack
//     Set currentPage to backStack.pop()

// FUNCTION goForward():
//     IF forwardStack is empty:
//         PRINT "No pages to go forward to"
//         RETURN
//     Push currentPage onto backStack
//     Set currentPage to forwardStack.pop()

// FUNCTION printState():
//     PRINT "Back Stack:", backStack
//     PRINT "Current Page:", currentPage
//     PRINT "Forward Stack:", forwardStack

// ***************************************************

// Reverse string 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  push(val) {
    const node = new Node(val);
    node.next = this.first;
    this.first = node;
    this.size++;
  }


  pop() {
    // throw error if stack is empty 
    if(this.isEmpty()){
      throw new Error ("Stack is currently empty.");
    }
    const poppedVal = this.first.val;
    this.first = this.first.next;
    this.size --;
    return poppedVal;
  }


  isEmpty() {
    return this.size === 0;
  }
}

function reverseString(str){
    let stack = new Stack();
    let reversedStr = "";

    for(let char of str){
        stack.push(char);
    }

    while(!stack.isEmpty()){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Balanced Brackets?

function isBalanced(str){
    let stack = [];
    
    let matchingBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};
    for (let char of str) {
        // If it's an opening bracket, push it to the stack
        if (matchingBrackets[char]) {
            stack.push(char);
        } 
        // If it's a closing bracket, check if it matches the last opened one
        else if (char === ')' || char === '}' || char === ']') {
        // If stack is empty, or the top of the stack doesn't match the closing bracket, return false
        if (stack.length === 0 || matchingBrackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
    // If the stack is empty at the end, the string is balanced
    return stack.length === 0;
}

// Josephus Survivor

class Node {
  constructor(val) {
    this.val = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a person to the circular list
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Points to itself to make the list circular
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Keeps the list circular
    }
  }

  // Remove the next node from the current node
  remove(node) {
    let current = this.head;

    // Special case: if we're removing the head node
    if (current === node) {
      this.head = current.next;
      this.tail.next = this.head;
      return current;
    }

    // Find the node before the one to be removed
    while (current) {
      if (current.next === node) {
        current.next = node.next;
        return node;
      }
      current = current.next;
    }

    return null;
  }
}

// Calculator 

function calc(expression) {
  const stack = [];
  const tokens = expression.split(' ');

  // Iterate over the tokens in reverse
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];

    // If the token is a number, push it to the stack
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      // If the token is an operator, pop two operands, apply the operator, and push the result back
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      let result;
      switch (token) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        default:
          throw new Error('Unknown operator');
      }

      // Push the result back onto the stack
      stack.push(result);
    }
  }

  // The final result will be the only value in the stack
  return stack.pop();
}