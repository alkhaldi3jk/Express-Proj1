const express = require("express");
const {
  eventListFetch,
  eventCreate,
  eventListDelete,
  eventListUpdate,
  eventDetail,
  eventSeats,
  searchEvent
} = require("./controllers");
const router = express.Router();

router.get("/", eventListFetch);
router.post("/", eventCreate);

router.delete("/:eventId", eventListDelete);
router.put("/:eventId", eventListUpdate);
router.get("/:eventId/detail", eventDetail);
router.get("/full", eventSeats);
router.get("/search", searchEvent);



module.exports = router;
