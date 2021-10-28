const mongoose = require("mongoose");
const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://alkhaldi3jk:alkhaldi22@cluster0.szdy6.mongodb.net/EventPlanner?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongo connected: ${conn.connection.host}`);
  };
  module.exports = connectDB;