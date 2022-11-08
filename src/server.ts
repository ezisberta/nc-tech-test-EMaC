import * as express from "express";
const { getCardById, getAllCards, postCard } = require("./controllers");

export const app = express();

app.set("json spaces", 2);

app.get("/cards/:cardId", getCardById);

app.get("/cards", getAllCards);

app.post("/cards", postCard);

app.use(({ status, message }, req, res, next) => {
  //distructured error obj above
  res.status(status).send({ message });
});
