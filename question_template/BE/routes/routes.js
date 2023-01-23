const express = require("express");
const authController = require("../controller/auth.controller");
const movieController = require("../controller/movie.controller");

module.exports.routes = () => {
  const router = express.Router();
  router.post("/user/register", authController.userRegister);
  router.post("/authenticate", authController.authenticate);

  router.post("/add/movie", movieController.addMovie);
  router.post("/add/theatre", movieController.addTheatre);

  // write logic here
  return router;
};
