const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    movieId: {
      type: String,
      required: true,
    },
    movieName: {
      type: String,
      required: true,
    },
    moviePoster: {
      type: String,
      default: false,
    },
    ticketPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Movies", moviesSchema);
