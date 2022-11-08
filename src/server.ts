import * as express from "express";
const { getCardById, getAllCards } = require("./controllers");

export const app = express();

app.set("json spaces", 2);

app.get("/cards/:cardId", getCardById);

app.get("/cards", getAllCards);

app.use(({ status, message }, req, res, next) => {
  //distructured error obj above
  res.status(status).send({ message });
});

// app.get('/cards/:cardId/:sizeId?', () => {
//   // respond with card by id
// })
