const MOVIESMODEL = require("../model/movies.model");
const THEATREMODEL = require("../model/theatre.model");
const BOOKINGMODEL = require("../model/booking.model");
const { v4: uuidv4 } = require("uuid");

const addMovie = async (req, res, next) => {
  try {
    const { movieName, moviePoster, ticketPrice } = req.body;
    const uuid = uuidv4();
    const movie = await MOVIESMODEL({
      movieId: uuid,
      movieName,
      moviePoster,
      ticketPrice,
    }).save();
    res.status(200).json({
      error: false,
      message: "Movie added successfully.",
      data: movie,
    });
  } catch (err) {
    next(err);
  }
};

const addTheatre = async (req, res, next) => {
  try {
    const { theatreName, seatCapacity } = req.body;
    const uuid = uuidv4();
    const theatre = await THEATREMODEL({
      theatreId: uuid,
      theatreName,
      seatCapacity,
    }).save();
    res.status(200).json({
      error: false,
      message: "Theatre added successfully.",
      data: theatre,
    });
  } catch (err) {
    next(err);
  }
};

const getAllMovies = () => {
  // write logic here
};

const getAllTheatre = () => {
  // write logic here
};

const bookMovie = () => {
  // write logic here
};

module.exports = {
  addMovie,
  getAllMovies,
  addTheatre,
  getAllTheatre,
  bookMovie,
};
