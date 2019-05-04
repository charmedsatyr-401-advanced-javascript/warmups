'use strict';

const { Node } = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.front) {
      this.front = node;
      return;
    }
  }

  dequeue() {
    let current = this.front;

    if (!current) {
      return null;
    }

    if (!current.next) {
      this.back = null;
      this.front = null;
      return current.data;
    }

    if (current) {
      current.next = this.front;
      return current.data;
    }
  }

  peek() {
    if (!this.front) {
      return null;
    }
    if (this.front) {
      return this.front.data;
    }
  }
}

module.exports = { Queue };
