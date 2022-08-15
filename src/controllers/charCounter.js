const counter = require("../helpers/charCounter")
const fetchedData = require("../helpers/fetchedData");



async function charCounter() {
  const start = new Date();
  const response = await fetchedData;
  
  const countCharacters = await counter(response.characters, /[?c]/);
  const countEpisodes = await counter(response.episodes, /[?e]/);
  const countLocation = await counter(response.locations, /[?l]/);
  const end = new Date() - start;

  const time = parseInt(end) + parseInt(response.time);
  return {
    countCharacters: countCharacters,
    countEpisodes: countEpisodes,
    countLocation: countLocation,
    time: time,
  };
}

module.exports = charCounter
