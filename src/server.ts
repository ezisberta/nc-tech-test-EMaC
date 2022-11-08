import * as express from "express";
const { getCardById } = require("./controllers");

export const app = express();

app.set("json spaces", 2);

app.get("/cards/:cardId", getCardById);

app.use(({ status, message }, req, res, next) => {
  //distructured error obj above
  res.status(status).send({ message });
});

// app.get("/cards", async () => {
//   // respond with a list of cards
// });

// app.get('/cards/:cardId/:sizeId?', () => {
//   // respond with card by id
// })
