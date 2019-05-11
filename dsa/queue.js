'use strict';

const { Node } = require('./node.js');

class Queue {
  constructor(data) {
    let node;
    if (data) {
      node = new Node(data);
    }
    this.front = node || null;
    this.back = node || null;
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

    if (!current || current.data === undefined || current.data === null) {
      return null;
    }

    if (!current.next || current.next.data == undefined || current.next.data == null) {
      this.front = null;
      this.back = null;
      return current.data;
    }

    const { data } = current;
    this.front = current.next;
    return data;
  }

  peek() {
    if (!this.front || this.front.data === undefined || this.front.data === null) {
      return null;
    }
    return this.front.data;
  }
}

module.exports = { Queue };
