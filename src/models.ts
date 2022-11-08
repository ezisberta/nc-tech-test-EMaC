const mode = process.env.NODE_ENV; //the mode will dictate the data source
const modeStr = mode === "test" ? "test_" : "";

const cards = require(`./${modeStr}data/${modeStr}cards.json`);
const sizes = require(`./${modeStr}data/${modeStr}sizes.json`);
const templates = require(`./${modeStr}data/${modeStr}templates.json`);

exports.fetchCardById = () => {
  console.log("MODEL");
};
