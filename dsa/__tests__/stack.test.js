'use strict';

const { alphaNumeric } = require('faker').random;

const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

const { Stack } = require('../stack');

describe('Stack', () => {
  describe('constructor', () => {
    it('should be possible to instantiate a stack', () => {
      const stack = new Stack();

      expect(stack).toBeDefined();

      expect.assertions(1);
    });
  });

  describe('`push` method', () => {
    it('should add a node', () => {
      const stack = new Stack();
      const a = alphaNumeric();
      const b = alphaNumeric();
      const c = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      expect(stack.top.data).toBe(c);

      expect.assertions(1);
    });
  });

  describe('`pop` method', () => {
    it('should return `null` on an empty stack', () => {
      const stack = new Stack();

      const result = stack.pop();
      expect(result).toBeNull();
    });

    it('should assign the `top` to `null` if the stack has been emptied', () => {
      const stack = new Stack();
      const a = alphaNumeric();

      stack.push(a);

      stack.pop();
      expect(stack.top).toBeNull();

      expect.assertions(1);
    });

    it('should return the value of the `top` node', () => {
      const stack = new Stack();
      const a = alphaNumeric();
      const b = alphaNumeric();
      const c = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);

      const result = stack.pop();
      expect(result.data).toBe(c);

      expect.assertions(1);
    });

    it('should remove the `top` node', () => {
      const stack = new Stack();
      const a = alphaNumeric();
      const b = alphaNumeric();
      const c = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);

      stack.pop();

      expect(stack.top.data).toBe(b);

      expect.assertions(1);
    });
  });

  describe('`print` method', () => {
    it('should return an empty array if the `top` does not exist', () => {
      const stack = new Stack();
      const result = stack.print();
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('should print all values in the stack in LIFO order', () => {
      const stack = new Stack();
      const a = alphaNumeric();
      const b = alphaNumeric();
      const c = alphaNumeric();
      const d = alphaNumeric();
      const e = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      stack.push(d);
      stack.push(e);

      const result = stack.print();
      const expected = [e, d, c, b, a];

      expect(result).toEqual(expected);

      expect.assertions(1);
    });

    it('should log all values in the stack in LIFO order', () => {
      log.mockClear();
      const stack = new Stack();
      const a = alphaNumeric();
      const b = alphaNumeric();
      const c = alphaNumeric();
      const d = alphaNumeric();
      const e = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      stack.push(d);
      stack.push(e);

      stack.print();

      const expected = [e, d, c, b, a];
      expect(log).toHaveBeenCalledWith(expected);

      expect.assertions(1);
      log.mockClear();
    });
  });
});
