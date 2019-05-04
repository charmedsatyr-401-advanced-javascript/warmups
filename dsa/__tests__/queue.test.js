'use strict';

const { Queue } = require('../queue');
const { alphaNumeric } = require('faker').random;

let q;
beforeEach(() => {
  q = new Queue();
});

describe('Queue', () => {
  it('should be possible to instantiate a queue', () => {
    expect(q).toBeDefined();

    expect.assertions(1);
  });

  it('it should be possible add a node', () => {
    const data = alphaNumeric();
    q.enqueue(data);
    expect(q.front.data).toBe(data);

    expect.assertions(1);
  });
  it('should be possible to traverse a queue front to back', () => {
    const a = alphaNumeric();
    const b = alphaNumeric();

    q.enqueue(a);
    q.enqueue(b);

    expect(q.front.data).toBe(a);
    expect(q.front.next.data).toBe(b);

    expect.assertions(2);
  });

  it('should be possible to dequeue the front node', () => {
    const a = alphaNumeric();
    q.enqueue(a);

    expect(q.dequeue()).toBe(a);

    expect(q.peek()).toBeNull();

    expect.assertions(2);
  });

  it('should be possible to dequeue the front node when the queue is longer than 1 node', () => {
    const a = alphaNumeric();
    const b = alphaNumeric();

    q.enqueue(a);
    q.enqueue(b);

    q.dequeue();
    expect(q.dequeue()).toBe(a);

    q.dequeue();
    console.log('QQQQQ:', q);
    //expect(q.dequeue()).toBe(b);

    //// expect(q.peek()).toBeNull();

    //  expect.assertions(3);
  });

  it('should return `null` when dequeueing an empty queue', () => {
    const result = q.dequeue();
    expect(result).toBeNull();
  });

  it('should be possible to peek on the front node', () => {
    expect(q.peek()).toBeNull();

    const a = alphaNumeric();
    q.enqueue(a);

    expect(q.peek()).toBe(a);

    expect.assertions(2);
  });
});
