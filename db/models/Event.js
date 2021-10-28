const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    organizer: {
      type: String,
      required: true,
    },
    name: { type: String },
    image: { type: String },
    email: { type: String },
    startDate: { type: Date },
    endDate: { type: Number },
    bookedSeats: { type: Number, required: true },
    numOfSeats: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", EventSchema);
