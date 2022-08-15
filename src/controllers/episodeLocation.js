const fetchedData = require("../helpers/fetchedData");

async function episodeLocation() {
  const start = new Date();
  const response = await fetchedData;
  
  const result = response.episodes?.map((epi) => {
    return {
      name: epi.name,
      episode: epi.episode,
      locations: response.characters

      //verifico si en la lista de personajes por episodio esta incluido la url del personaje
      // si esta devuelve la locación
        .map((char) => {
          if (epi.characters.includes(char.url)) return char.origin.name;
        })
        .filter((ele) => (ele !== null ? ele : ""))
        .reduce((acc, b) => {
          if (!acc.includes(b)) {
            acc.push(b);
          }
          return acc;
        }, [])
        .flat(),
    };
  });

  const end = new Date() - start;

  const time = parseInt(end) + parseInt(response.time);
  return { result: result, time: time };
}

module.exports = episodeLocation;
