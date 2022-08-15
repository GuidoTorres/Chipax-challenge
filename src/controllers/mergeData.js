const charCounter = require("../controllers/charCounter")
const episodeLocation = require("../controllers/episodeLocation")

const mergeData = async (req, res) => {
      const result = [
        {
          exercise_name: "Char counter",
          time: (await charCounter()).time,
          in_time: (await charCounter()).time <3000 ? true : false,
          results: [
            {
              char: "l",
              count: (await charCounter()).countLocation,
              resource: "location",
            },
            {
              char: "e",
              count: (await charCounter()).countEpisodes,
              resource: "episode",
            },
            {
              char: "c",
              count: (await charCounter()).countCharacters,
              resource: "character",
            },
          ],
        },
        {
          exercise_name: "Episode locations",
          time: (await episodeLocation()).time,
          in_time: (await episodeLocation()).time <3000 ? true: false,
          results: (await episodeLocation()).result,
        },
      ];
      res.send({ data: result });

  };

  module.exports =mergeData