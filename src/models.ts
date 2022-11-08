import { title } from "process";

const mode = process.env.NODE_ENV; //the mode will dictate the data source
const modeStr = mode === "test" ? "test_" : "";

const cards = require(`./${modeStr}data/${modeStr}cards.json`);
const allSizes = require(`./${modeStr}data/${modeStr}sizes.json`);
const templates = require(`./${modeStr}data/${modeStr}templates.json`);

exports.fetchCardById = (cardId) => {
  const cardToFetch = cards.find((card) => card.id === cardId);

  if (cardToFetch === undefined) {
    return "Not found"; //tell controller the card was not found
  }

  const { title, id, basePrice, pages, sizes } = cardToFetch; //most keys need no alterations, so decided to destructure
  const card_id = id; //change key name to match expected response

  const cardFrontCoverTemplate = cardToFetch.pages.find(
    // need to get template id...
    (page) => page.title === "Front Cover"
  ).templateId;
  const imageUrl = templates.find(
    // ... to then get image URL
    (template) => template.id === cardFrontCoverTemplate
  ).imageUrl;

  const availableSizes = sizes.map(
    (
      availableSize // here we need to match the each size on the card data to its full info that's on the sizes.json file
    ) => allSizes.find((size) => size.id === availableSize)
  );

  return { title, card_id, basePrice, pages, imageUrl, availableSizes };
};

exports.fetchAllCards = () => {
  console.log("Model");

  return cards.map((card) => {
    // iterate through cards to extract a few details according to the expected obj
    const cardFrontCoverTemplate = card.pages.find(
      (page) => page.title === "Front Cover" //What we did in fetchCardById now aplied to all cards
    ).templateId;
    const imageUrl = templates.find(
      (template) => template.id === cardFrontCoverTemplate
    ).imageUrl;

    return { card_id: card.id, title: card.title, imageUrl };
  });
};
