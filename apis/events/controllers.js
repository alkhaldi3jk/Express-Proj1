const Event = require("../../db/models/Event");

exports.eventListFetch = async (req, res) => {
  try {
    const events = await Event.find(req.body);
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.eventCreate = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.eventListDelete = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findByIdAndDelete({ _id: eventId });
    // await Event.filter((eventId) => event.id !== eventId);
    if (event) {
      //   await event.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.eventListUpdate = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findByIdAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    });
    // await Event.filter((eventId) => event.id !== eventId);
    if (event) {
      //   await event.remove();
      return res.status(204).json(event);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.eventDetail = async (req, res) => {
  const { eventId } = req.params;

  try {
    const events = await Event.findById({ _id: eventId }, req.body);
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.eventSeats = async (req, res) => {

  try {
    const boodkedEvents = await Event.find({
      $expr: { $eq: ["$bookedSeats", "$numOfSeats"] },
    },req.body);
    return res.status(200).json(boodkedEvents);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
