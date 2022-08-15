const axios = require("axios");

module.exports = async function getAllData() {
  let arrayEpisodes = [];
  let arrayLocations = [];
  let arrayCharacters = [];
  const maxPages = 42;

    for (let index = 1; index <= maxPages; index++) {
      if (index <= 3) {
        arrayEpisodes.push(
          axios
            .get(`https://rickandmortyapi.com/api/episode?page=${index}`)
            .then((response) => {
              return response;
            })
        );
      }
      if (index <= 7) {
        arrayLocations.push(
          axios
            .get(`https://rickandmortyapi.com/api/location?page=${index}`)
            .then((response) => {
              return response;
            })
        );
      }
      arrayCharacters.push(
        axios
          .get(`https://rickandmortyapi.com/api/character?page=${index}`)
          .then((response) => {
            return response;
          })
      );
    }

    const responseEpisodes = Promise.all(arrayEpisodes);
    const responseCharacters = Promise.all(arrayCharacters);
    const responseLocations = Promise.all(arrayLocations);

    const result = await Promise.all([
      responseEpisodes,
      responseCharacters,
      responseLocations,
    ]);

    return result;

};
