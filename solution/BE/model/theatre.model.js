const { Schema, model } = require("mongoose");

const theatreSchema = new Schema(
  {
    theatreId: {
      type: String,
      required: true,
    },
    theatreName: {
      type: String,
      required: true,
    },
    seatCapacity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Theatres", theatreSchema);
