import * as request from "supertest";
import { app } from "../server";

describe("GET /cards/:cardId sucsess", () => {
  test("returns 200 status", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.status).toBe(200);
  });
  test("returns matching card title", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ title: "card 3 title" })
    );
  });
  test("returns matching card id", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ card_id: "card003" })
    );
  });
  test("returns matching base price", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(expect.objectContaining({ basePrice: 200 }));
  });
  test("returns matching pages", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({
        pages: [
          {
            title: "Front Cover",
            templateId: "template006",
          },
          {
            title: "Inside Top",
            templateId: "template007",
          },
          {
            title: "Inside Bottom",
            templateId: "template007",
          },
          {
            title: "Back Cover",
            templateId: "template008",
          },
        ],
      })
    );
  });
  test("returns matching imageUrl", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ imageUrl: "/front-cover-landscape.jpg" })
    );
  });
  test("returns matching sizes", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({
        availableSizes: [
          { id: "md", title: "Medium" },
          { id: "lg", title: "Large" },
        ],
      })
    );
  });
});

describe('"GET /cards/:cardId errors"', () => {
  test("returns 400 status if id is not in a valid format", async () => {
    const response = await request(app).get("/cards/carrd005");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Bad request");
  });
  test("returns 404 status if id does not exist", async () => {
    const response = await request(app).get("/cards/card005");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Not found");
  });
});

describe("GET cards/", () => {
  test("returns 200 status", async () => {
    const response = await request(app).get("/cards");
    expect(response.status).toBe(200);
  });
  test("returns an array of cards, each containing an id", async () => {
    const response = await request(app).get("/cards");
    response.body.forEach((card) => {
      expect(card).toEqual(
        expect.objectContaining({
          card_id: expect.any(String),
        })
      );
    });
  });
  test("returns an array of cards, each containing a title", async () => {
    const response = await request(app).get("/cards");
    response.body.forEach((card) => {
      expect(card).toEqual(
        expect.objectContaining({
          title: expect.any(String),
        })
      );
    });
  });
  test("returns an array of cards, each containing an imageUrl", async () => {
    const response = await request(app).get("/cards");
    response.body.forEach((card) => {
      expect(card).toEqual(
        expect.objectContaining({
          imageUrl: expect.any(String),
        })
      );
    });
  });
});

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })
