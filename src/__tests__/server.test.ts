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
    expect(response.body).toEqual(expect.objectContaining({ base_price: 200 }));
  });
  test("returns matching imageUrl", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.body).toEqual(
      expect.objectContaining({ imageUrl: "/front-cover-landscape.jpg" })
    );
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

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })
