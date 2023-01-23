const express = require("express");
const authController = require("../controller/auth.controller");
const movieController = require("../controller/movie.controller");

module.exports.routes = () => {
  const router = express.Router();
  router.post("/user/register", authController.userRegister);
  router.post("/authenticate", authController.authenticate);

  router.post("/add/movie", movieController.addMovie);
  router.post("/add/theatre", movieController.addTheatre);
  router.get("/movies/get/all", movieController.getAllMovies);
  router.get("/theatre/get/all", movieController.getAllTheatre);
  router.post("/movie/book", movieController.bookMovie);
  return router;
};
