import * as request from "supertest";
import { app } from "../server";

describe("GET /cards/:cardId sucsess", () => {
  test.only("returns 200 status", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.status).toBe(200);
  });
  test.only("returns matching card title", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ title: "card 3 title" })
    );
  });
  test.only("returns matching card id", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ card_id: "card003" })
    );
  });
  test.only("returns matching base price", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(expect.objectContaining({ basePrice: 200 }));
  });
  test.only("returns matching pages", async () => {
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
  test.only("returns matching imageUrl", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ imageUrl: "/front-cover-landscape.jpg" })
    );
  });
  test.only("returns matching sizes", async () => {
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

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })
