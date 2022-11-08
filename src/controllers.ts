const { fetchCardById } = require("./models");

exports.getCardById = (req, res, next) => {
  const cardId = req.params.cardId;
  console.log("CONTROLLER", cardId);

  fetchCardById(cardId);

  res.send(fetchCardById(cardId)); //destructured fetched data in model
};
