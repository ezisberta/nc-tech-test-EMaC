const { fetchCardById, fetchAllCards } = require("./models");

exports.getCardById = (req, res, next) => {
  const cardId = req.params.cardId;

  if (!/^(card)\d{3}$/.test(cardId)) {
    //regex to check if id is not in the right format
    try {
      throw { status: 400, message: "Bad request" }; // throw error in that case
    } catch (err) {
      next(err);
    }
  } else if (fetchCardById(cardId) === "Not found") {
    try {
      throw { status: 404, message: "Not found" }; // throw error bc card was not found
    } catch (err) {
      next(err);
    }
  }

  res.send(fetchCardById(cardId)); //destructured fetched data in model
};

exports.getAllCards = (req, res, next) => {
  console.log("CONTROLLER");
  fetchAllCards();
  res.send({});
};
