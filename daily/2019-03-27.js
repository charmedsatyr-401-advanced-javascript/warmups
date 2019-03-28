'use strict';

/*
************************************
        WARMUP DAILY
************************************


************************************
ARRAYS
************************************

1. Create an array of numbers, 1 through 10

2. Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

3. Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

4. Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For Loop
const forLoop = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// While Loop
const whileLoop = arr => {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
};
// .Map
const map = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};
// .Filter
const filter = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) result.push(arr[i]);
  }
  return result;
};

// .Reduce
const reduce = (arr, cb, acc) => {
  let total = acc ? acc : 0;
  for (let i = 0; i < arr.length; i++) {
    total = cb(total, arr[i], i);
  }
  return total;
};

forLoop(arr);
whileLoop(arr);
map(arr, n => n + 1);
filter(arr, n => n === 1);
console.log('should be 0:', reduce(arr, (acc, curr) => acc + curr, -55));
console.log('should be 55:', reduce(arr, (acc, curr) => acc + curr));

/*
************************************
OBJECTS
************************************

1. Begin with the starter code below

2. Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.

3. Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it

4. Create a state object with keys of people and stuff that contain the people and stuff data.

5. Do this using object destructuring assignment

6. Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)

7. Prove that the original people, stuff, and state are unchanged.
*/

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

let state = {};
let newPeople = [];
const newStuff = {};
let newState = {};

//*******************************
//      Canvas Submission
//*******************************
// Submit a link to a PR from that branch to your master for review
