/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // create a new node 
    const node = new Node(val);

    // handle empty queue case 
    if(this.isEmpty()){
      this.first = this.last = node;
    }
    else{
      this.last.next = node;
      this.last = node;
    }
    this.size++;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // handle empty queue 
    if(this.isEmpty()){
      throw new Error("Queue is empty.");
    }
    // store front value 
    const dequeuedVal = this.front.val;
    // move front value to be next node 
    this.front = this.front.next;
    
    // reset rear if queue now empty 
    if(this.isEmpty()){
      this.rear = null;
    }

    return dequeuedVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.val.first()
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
