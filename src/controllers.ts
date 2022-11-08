const { fetchCardById } = require("./models");

exports.getCardById = (req, res, next) => {
  console.log("CONTROLLER");
  fetchCardById();
};
