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

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await MOVIESMODEL.find({});
    res.status(200).json({
      error: false,
      messages: "Movies fetched successfully.",
      data: movies,
    });
  } catch (err) {
    next(err);
  }
};

const getAllTheatre = async (req, res, next) => {
  try {
    const theatre = await THEATREMODEL.find({});
    res.status(200).json({
      error: false,
      messages: "Theatre fetched successfully.",
      data: theatre,
    });
  } catch (err) {
    next(err);
  }
};

const bookMovie = async (req, res, next) => {
  try {
    const {
      theatreId,
      movieId,
      bookingDate,
      bookingTime,
      seatCount,
      bookingAmount,
    } = req.body;
    const uuid = uuidv4();

    const { seatCapacity } = await THEATREMODEL.findOne({ theatreId });
    const bookedSeats = await BOOKINGMODEL.aggregate([
      { $match: { theatreId, movieId, bookingDate, bookingTime } },
      {
        $group: {
          _id: null,
          seatCount: {
            $sum: "$seatCount",
          },
        },
      },
    ]);

    if (
      seatCount > seatCapacity ||
      bookedSeats[0]?.seatCount + seatCount > seatCapacity
    ) {
      return res
        .status(502)
        .json({ error: true, message: "No seats are available" });
    }
    const booked = await BOOKINGMODEL({
      bookingId: uuid,
      theatreId,
      movieId,
      bookingDate,
      bookingTime,
      seatCount,
      bookingAmount,
    }).save();

    await res.status(200).json({
      error: false,
      message: "Ticket booked successfully.",
      data: booked,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  addTheatre,
  getAllTheatre,
  bookMovie,
};
