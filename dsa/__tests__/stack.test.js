'use strict';

const Node = require('../node');
const stack = require('../stack');

describe('Stack', () => {
  it('should be possible to add a node', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.data).toBe(3);
  });
  it('should be possible to traverse a stack top to bottom', () => {
    expect(stack.top.next.data).toBe(2);
    expect(stack.top.next.next.data).toBe(1);
  });
});
