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
  breadthFirstOrder(root = this.root) {
    const q = new Queue();
    let current = root;

    const data = [];

    if (!current) {
      return null;
    }

    q.enqueue(current);

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
   * d   e f   g
   *
   * ==>[a, b, d, e, c, f, g]
   *
   ***/
  preOrder(root = this.root) {
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

    return data.length > 0 ? data : null;
  }

  /***
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   *  ??  ==> [d, b, e, a, f, c, g]
   *
   ***/
  inOrder(root = this.root) {
    const data = [];

    const traverseInOrder = root => {
      if (!root) {
        return null;
      }

      if (root.left) {
        traverseInOrder(root.left);
      }

      if (root) {
        data.push(root.data);
      }

      if (root.right) {
        traverseInOrder(root.right);
      }
    };

    traverseInOrder(root);

    return data.length > 0 ? data : null;
  }

  postOrder(root = this.root) {
    const data = [];

    const traversePostOrder = root => {
      if (!root) {
        return null;
      }

      if (root.left) {
        traversePostOrder(root.left);
      }

      if (root.right) {
        traversePostOrder(root.right);
      }

      if (root) {
        data.push(root.data);
      }
    };

    traversePostOrder(root);

    return data.length > 0 ? data : null;
  }

  findMaximumValue(root = this.root) {
    const q = new Queue();
    let current = root;
    let max = null;
    if (!current) {
      return null;
    }
    max = current.data;

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
