import * as request from "supertest";
import { app } from "../server";

describe("GET /cards/:cardId sucsess", () => {
  test("returns 200 status", async () => {
    const response = await request(app).get("/cards/card003");
    expect(response.status).toBe(200);
  });

  // test("returns matching card name", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(
  //     expect.objectContaining({ name: "card 3 name" })
  //   );
  // });
  // test("returns matching card id", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(expect.objectContaining({ id: "card003" }));
  // });
  // test("returns matching sales", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(expect.objectContaining({ sales: 400 }));
  // });
  // test("returns matching piece", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(expect.objectContaining({ piece: "hat" }));
  // });
  // test("returns matching outfits", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(
  //     expect.objectContaining({
  //       outfit: [
  //         { part: "head", garnmentId: "garnment006" },
  //         { part: "waist", garnmentId: "garnment007" },
  //         { part: "ankle", garnmentId: "garnment007" },
  //         { part: "feet", garnmentId: "garnment008" },
  //       ],
  //     })
  //   );
  // });
  // test("returns matching colours", async () => {
  //   const response = await request(app).get("/cards/card003");
  //   expect(response.body).toEqual(
  //     expect.objectContaining({
  //       availableColours: [
  //         { id: "bk", title: "Black" },
  //         { id: "br", title: "Brown" },
  //       ],
  //     })
  //   );
  // });
});

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })
