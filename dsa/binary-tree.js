'use strict';

const { Node } = require('./node');
const { Queue } = require('./queue');

class BinaryTree {
  constructor(data) {
    this.root = null;
    if (data) {
      this.root = new Node(data) || null;
    }
  }
  add(data) {
    const q = new Queue();
    let current = this.root;
    if (!current) {
      this.root = new Node(data);
      return;
    }
    q.enqueue(current);
    while (q.peek()) {
      current = q.dequeue();
      if (!current.left) {
        current.left = new Node(data);
        return;
      }
      if (!current.right) {
        current.right = new Node(data);
        return;
      }
      q.enqueue(current.left);
      q.enqueue(current.right);
    }
  }

  /***    a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f    g
   *
   * => [a, b, c, d, e, f, g]
   ***/
  breadthFirstOrder() {
    const q = new Queue();
    let current = this.root;
    const data = [];
    if (!current) {
      return null;
    }

    while (q.peek()) {
      q.enqueue(current);
      data.push(current.data);

      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
    return data;
  }

  /***
   *      a
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   * ==>[a, b, d, e, c, f, g]
   *
   ***/
  preOrder(root) {
    const data = [];

    const traversePreOrder = root => {
      if (!root) {
        return null;
      }
      if (root) {
        data.push(root.data);
      }
      if (root.left) {
        traversePreOrder(root.left);
      }
      if (root.right) {
        traversePreOrder(root.right);
      }
    };
    traversePreOrder(root);

    return data;
  }
}

module.exports = { BinaryTree };
