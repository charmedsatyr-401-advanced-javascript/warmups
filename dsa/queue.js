'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.back = null;
    this.front = null;
  }
  enQ(data) {
    const node = new Node(data);
    if (this.back) {
      this.back.next = node;
    }
    this.back = node;

    if (!this.front) {
      this.front = node;
    }
  }
}

module.exports = new Queue();
