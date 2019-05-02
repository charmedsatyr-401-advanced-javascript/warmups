'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
}

module.exports = new Stack();
