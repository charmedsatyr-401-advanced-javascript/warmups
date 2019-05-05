// Arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forLoop
const forLoop = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
forLoop(array);

// whileLoop
const whileLoop = arr => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};
whileLoop(array);

// map
const map = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
};
console.log(map(array, num => num + 100));

// filter
const filter = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(filter(array, num => num !== 1));

// reduce
const reduce = (arr, cb, init) => {
  let acc,
    i = 0;
  if (init) {
    acc = init;
  } else {
    acc = arr[i];
    i++;
  }
  for (i; i < arr.length; i++) {
    acc = cb(acc, arr[i], i);
  }
  return acc;
};
console.log(reduce(array, (acc, curr) => acc - curr) === array.reduce((acc, curr) => acc - curr));

// Objects
// Starter Code
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

// const newPeople = ['Odie', ...people, 'Garfield'];
// const newStuff = { ...stuff, cars: [...stuff.cars, 'GMC'] };
const state = { stuff, people };
const newState = {
  stuff: { ...stuff, cars: [...stuff.cars, 'GMC'] },
  people: ['Odie', ...people, 'Garfield'],
};
console.log(state);
console.log(newState);
