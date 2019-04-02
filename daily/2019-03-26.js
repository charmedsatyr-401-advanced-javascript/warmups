'use strict';

// Objects
// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
console.log('--------------------------\n');
const people = ['Kookla', 'Fran', 'Ollie'];
console.log('people:', people);
const newPeople = ['Odie', ...people, 'Garfield'];
console.log('newPeople:', newPeople);

// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
console.log('--------------------------\n');
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};
console.log('stuff:', stuff);

const newStuff = { ...stuff, cars: [...stuff.cars, 'Ferarri'] };
console.log('newStuff:', newStuff);

// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
console.log('--------------------------\n');
const state = { people, stuff };
console.log('state:', state);

// Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
console.log('--------------------------\n');
const newState = {
  ...state,
  people: ['Odie', ...people, 'Garfield'],
  cars: [...stuff.cars, 'Ferarri'],
};
console.log('newState:', newState);

// Prove that the original people, stuff, and state are unchanged.
console.log('--------------------------\n');
console.log('Unchanged people:', people);
console.log('Unchanged stuff:', stuff);
console.log('Unchanged state:', state);
