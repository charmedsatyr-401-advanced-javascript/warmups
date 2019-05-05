'use strict';

const { Queue } = require('./queue');
const { Node } = require('./node');

class BinaryTree {
  constructor(data) {
    this.root = null;
    if (data) {
      this.root = new Node(data);
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
  breadthFirstOrder(root = this.root, data = []) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    let current = root;
    const q = new Queue(current);

    while (q.peek()) {
      current = q.dequeue();
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
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f    g
   * ==> [a, b, d, e, c, f, g]
   ***/
  preOrder(root = this.root, data = []) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    data.push(root.data);

    if (root.left) {
      this.preOrder(root.left, data);
    }

    if (root.right) {
      this.preOrder(root.right, data);
    }
    return data;
  }

  /***
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   * ==> [d, b, e, a, f, c, g]
   ***/
  inOrder(root = this.root, data = []) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    if (root.left) {
      this.inOrder(root.left, data);
    }

    data.push(root.data);

    if (root.right) {
      this.inOrder(root.right, data);
    }

    return data;
  }

  /***
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   * ==> [d, e, b, f, g, c, a];
   ***/
  postOrder(root = this.root, data = []) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    if (root.left) {
      this.postOrder(root.left, data);
    }

    if (root.right) {
      this.postOrder(root.right, data);
    }

    data.push(root.data);

    return data;
  }

  findMaximumValue(root = this.root) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    let current = root;
    const q = new Queue();
    let max = current.data;

    q.enqueue(current);

    while (q.peek()) {
      current = q.dequeue();
      if (current.data > max) {
        max = current.data;
      }

      if (current.left) {
        q.enqueue(current.left);
      }

      if (current.right) {
        q.enqueue(current.right);
      }
    }
    return max;
  }
}

module.exports = { BinaryTree };
