'use strict';

/***
 * Other properties could be assigned to track with potential,
 * use cases, but this implementation is clean and useful in
 * many data structures.
 ***/
class Node {
  constructor(data = null) {
    this.data = data;
  }
}

module.exports = { Node };
