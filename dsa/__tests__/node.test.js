'use strict';

const { Node } = require('../node');
const { alphaNumeric } = require('faker').random;

describe('`Node` class', () => {
  it('can instantiate a node without data', () => {
    const node = new Node();
    expect(node).toBeDefined();
  });

  it('has a `data` property with the value of `null`', () => {
    const node = new Node();
    expect(node.data).toBeNull();
  });

  it('can instantiate a node with data that is stored in a `data` property', () => {
    const data = alphaNumeric();
    const node = new Node(data);
    expect(node.data).toBe(data);
  });
});
