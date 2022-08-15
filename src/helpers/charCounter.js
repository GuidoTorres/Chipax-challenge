module.exports = async function CharCounter(data, char) {
    const arrays = data.reduce((a, b) => a.concat(b), []);
    let total = arrays
      .map((item) => item?.name.split(char).length - 1)
      .reduce((a, b) => a + b, 0);
  
    return total;
  };