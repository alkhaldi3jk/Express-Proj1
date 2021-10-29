const express = require("express");
const {
  eventListFetch,
  eventCreate,
  eventListDelete,
  eventListUpdate,
  eventDetail,
  eventSeats,
  searchEvent,
  deleteMulti
} = require("./controllers");
const router = express.Router();

router.get("/", eventListFetch);
router.post("/", eventCreate);

router.delete("/:eventId", eventListDelete);
router.put("/:eventId", eventListUpdate);
router.get("/:eventId/detail", eventDetail);
router.get("/full", eventSeats);
router.get("/search", searchEvent);
router.delete("/:endDate/deleteall",deleteMulti)


module.exports = router;
