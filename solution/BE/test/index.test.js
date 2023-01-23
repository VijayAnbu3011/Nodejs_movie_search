const app = require("../index");
const request = require("supertest");

describe("GET /movies/get/all", () => {
  it("Get all movies", done => {
    request(app)
      .get("/movies/get/all")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("GET /theatre/get/all", () => {
  it("Get all theatre", done => {
    request(app)
      .get("/theatre/get/all")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("GET /movie/book", () => {
  it("Book movie success", done => {
    const payload = {
      theatreId: "b155ca0f-5eeb-4612-9828-70dc209f2b8a",
      movieId: "61aac3d3-2031-447c-88f6-b0c664f7407a",
      bookingDate: `${new Date().toDateString()}`,
      bookingTime: "02:00 PM",
      seatCount: 1,
      bookingAmount: "250",
    };
    request(app)
      .post("/movie/book")
      .set("Accept", "application/json")
      .send(payload)
      .expect(200, done);
  });

  it("Book movie failed", done => {
    const payload = {
      theatreId: "ec12f937-83b4-4a9c-9b00-79befc6d0a42",
      movieId: "61aac3d3-2031-447c-88f6-b0c664f7407a",
      bookingDate: `${new Date().toDateString()}`,
      bookingTime: "02:00 PM",
      seatCount: 3,
      bookingAmount: "750",
    };
    request(app)
      .post("/movie/book")
      .set("Accept", "application/json")
      .send(payload)
      .expect(502, done);
  });
});
