'use strict';

const { Node } = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.front) {
      this.back = node;
      this.front = node;
    } else {
      const back = this.back;
      back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    let current = this.front;

    if (!current) {
      return null;
    }

    if (!current.next) {
      this.front = null;
      this.back = null;
      return current.data;
    }

    if (current && current.next) {
      const { data } = current;
      this.front = current.next;
      return data;
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
