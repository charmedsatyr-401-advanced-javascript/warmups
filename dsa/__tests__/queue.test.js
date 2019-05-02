'use strict';

const node = require('../node');
const q = require('../queue');

describe('Queue', () => {
  it('it should be possible add a node', () => {
    q.enQ(1);
    expect.assertions(1);
    expect(q.front.data).toBe(1);
  });
  it('should be possible to traverse a node front to back', () => {
    q.enQ(2);
    q.enQ(3);
    expect(q.front.next.data).toBe(2);
    expect(q.front.next.next.data).toBe(3);
  });
});
