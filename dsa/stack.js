'use strict';

const { Node } = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top || this.top.data === undefined || this.top.data === null) {
      return null;
    }

    const top = this.top;
    if (this.top.next) {
      this.top = this.top.next;
    } else {
      this.top = null;
    }
    return top;
  }

  print() {
    if (!this.top || this.top.data === undefined || this.top.data === null) {
      return [];
    }

    let current = this.top;

    const result = [current.data];
    while (current.next) {
      current = current.next;
      result.push(current.data);
    }
    console.log(result);
    return result;
  }
}

module.exports = { Stack };
