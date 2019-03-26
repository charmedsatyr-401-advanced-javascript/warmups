'use strict';

// I will start with objects tomorrow
const arr = [1, 2, 3, 4, 5];

const forLoop = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
forLoop(arr); // 1, 2, 3, 4, 5

const whileLoop = arr => {
  let n = 0;
  while (n < arr.length) {
    console.log(arr[n]);
    n++;
  }
};
whileLoop(arr); // 1, 2, 3, 4, 5

const map = (arr, cb) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};
console.log(map(arr, n => n + 1)); // [2, 3, 4, 5, 6]

const filter = (arr, cb) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filter(arr, n => n === 1)); // [1]

const reduce = (arr, cb) => {
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i], i);
  }
  return acc;
};
console.log(reduce(arr, (acc, curr) => acc + curr)); // 15
