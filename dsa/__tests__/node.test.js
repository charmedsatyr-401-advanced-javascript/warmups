'use strict';

const { Node } = require('../node');
const { alphaNumeric } = require('faker').random;

describe('`Node` class', () => {
  it('can successfully instantiate a node', () => {
    const node = new Node();
    expect(node).toBeDefined();
  });

  it('has a `next` property with the value of `null`', () => {
    const node = new Node();
    expect(node.next).toBeNull();
  });

  it('can can be instantiated with data that is stored in a `data` property', () => {
    const data = alphaNumeric();
    const node = new Node(data);
    expect(node.data).toBe(data);
  });

  it('does not have `left` or `right` properties', () => {
    const node = new Node();

    expect(node.left).toBeUndefined();
    expect(node.right).toBeUndefined();
  });
});
