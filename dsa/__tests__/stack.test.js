'use strict';

const { Node } = require('../node');
const { Stack } = require('../stack');

describe('Stack', () => {
  it('should be possible to instantiate a stack', () => {
    const stack = new Stack();

    expect(stack).toBeDefined();

    expect.assertions(1);
  });

  it('should be possible to add a node', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.data).toBe(3);

    expect.assertions(1);
  });

  it('should be possible to traverse a stack top to bottom', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.top.data).toBe(2);
    expect(stack.top.next.data).toBe(1);

    expect.assertions(2);
  });
});
