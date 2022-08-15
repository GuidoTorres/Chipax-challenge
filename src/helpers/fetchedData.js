const serviceGetData = require("../services/getAllData");

const fetchedData = async () => {

    const start = new Date();

    const response = await serviceGetData();
    const characters = response[1].map((item) => item.data.results).flat();
    const episodes = response[0].map((item) => item.data.results).flat();
    const locations = response[2].map((item) => item.data.results).flat();
    const end = new Date() - start;

    return {
      characters: characters,
      episodes: episodes,
      locations: locations,
      time: end,
    };

};

module.exports = fetchedData();
