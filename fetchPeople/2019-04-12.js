'use strict';

const superagent = require('superagent');

const fetchPeopleWithPromises = () => {
  const swapi = 'https://swapi.co/api/people/';
  superagent
    .get(swapi)
    .then(result => result.body.results)
    .then(people => people.map(person => person.url))
    .then(urlArray => urlArray.map(url => superagent.get(url)))
    .then(promiseArray => Promise.all(promiseArray))
    .then(resolved => {
      resolved.forEach(person => console.log(person.body.name));
    })
    .catch(console.error);
};

const fetchPeopleWithAsync = async () => {
  const swapi = 'https://swapi.co/api/people/';
  const result = await superagent.get(swapi);
  const urlArray = result.body.results.map(person => person.url);
  const promiseArray = urlArray.map(url => superagent.get(url));
  const people = await Promise.all(promiseArray);
  people.forEach(person => console.log(person.body.name));
};

fetchPeopleWithPromises();
fetchPeopleWithAsync();
