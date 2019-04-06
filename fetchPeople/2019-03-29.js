'use strict';

const superagent = require('superagent');
const swapi = 'https://swapi.co/api/people/';

const fetchPeopleWithPromises = () => {
  /* Use superagent to load content from the Star Wars API
   * https://swapi.co/api/people/
   * Reduce the results array (an array of people objects) into an simpler array of urls from the person’s url property
   * Go through that array, fetching each person’s data with superagent, building up an array of promises
   * Use promise.all to collect all of the responses at once.
   * When all of the promises have resolved, print a list of each person’s name
   * Repeat the process, but this time using a function called fetchPeopleWithAsync() which uses async and await to return you a list of people
   */

  superagent.get(swapi).then(data => {
    const { text } = data;
    const json = JSON.parse(text);
    const { results } = json;
    const urls = results.map(r => r.url);
    const promises = urls.map(u => superagent.get(u));
    Promise.all(promises).then(d => d.forEach(d => console.log(d.body.name)));
  });
};
fetchPeopleWithPromises();
