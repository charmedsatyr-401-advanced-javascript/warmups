'use strict';

const { Queue } = require('../queue');
const { alphaNumeric } = require('faker').random;

describe('Queue', () => {
  it('can instantiate a queue without data', () => {
    const q = new Queue();
    expect(q).toBeDefined();

    expect.assertions(1);
  });

  it('should have a `front` property', () => {
    const q = new Queue();
    expect(q.front).toBeNull();

    expect.assertions(1);
  });

  it('should have a `back` property', () => {
    const q = new Queue();
    expect(q.back).toBeNull();

    expect.assertions(1);
  });

  it('can instantiate a queue with data in a node set at front and back', () => {
    const data = alphaNumeric();
    const q = new Queue(data);
    expect(q).toBeDefined();

    expect(q.front.data).toBe(data);
    expect(q.back.data).toBe(data);

    expect.assertions(3);
  });

  it('can add a node', () => {
    const q = new Queue();

    const data = alphaNumeric();
    q.enqueue(data);
    expect(q.front.data).toBe(data);

    expect.assertions(1);
  });
  it('can traverse front to back', () => {
    const a = alphaNumeric();
    const b = alphaNumeric();

    const q = new Queue(a);
    q.enqueue(b);

    expect(q.front.data).toBe(a);
    expect(q.front.next.data).toBe(b);

    expect.assertions(2);
  });

  it('can dequeue the front node', () => {
    const a = alphaNumeric();
    const q = new Queue(a);

    expect(q.dequeue()).toBe(a);

    expect(q.peek()).toBeNull();

    expect.assertions(2);
  });

  it('can dequeue the front node when the queue is longer than 1 node', () => {
    const a = alphaNumeric();
    const b = alphaNumeric();

    const q = new Queue(a);
    q.enqueue(b);

    expect(q.dequeue()).toBe(a);

    expect(q.dequeue()).toBe(b);

    expect(q.peek()).toBeNull();

    expect.assertions(3);
  });

  it('should return `null` when dequeueing an empty queue', () => {
    const q = new Queue();
    const result = q.dequeue();
    expect(result).toBeNull();
  });

  it('can peek on the front node', () => {
    const q = new Queue();
    expect(q.peek()).toBeNull();

    const a = alphaNumeric();
    q.enqueue(a);
    expect(q.peek()).toBe(a);

    const b = alphaNumeric();
    q.enqueue(b);
    expect(q.peek()).toBe(a);

    expect.assertions(3);
  });
});
