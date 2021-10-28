const express = require("express");
const connectDB = require("./db/database");
const eventsRoutes = require("./apis/events/routes");

const app = express();
app.use(express.json());

app.use("/api/events", eventsRoutes);

connectDB();

app.listen(8080, () => {
  console.log("This app is run on localhost:8080");
});
