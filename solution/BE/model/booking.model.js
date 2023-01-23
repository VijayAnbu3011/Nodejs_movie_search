const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    bookingId: {
      type: String,
      required: true,
    },
    theatreId: {
      type: String,
      required: true,
    },
    movieId: {
      type: String,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    bookingTime: {
      type: String,
      required: true,
      enum: ["10:00 AM", "02:00 PM", "05:00 PM", "10:00 PM"],
    },
    seatCount: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
    bookingAmount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Bookings", bookingSchema);
