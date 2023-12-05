import mongoose from "mongoose";
const { connection } = mongoose;
const connectToDB = async () => {
  try {
    if (connection.readyState === 1) return;
    const db = await mongoose.connect(
      "mongodb+srv://arbor0711:123!@#qwe@cluster1.alhxoig.mongodb.net/dashboard?retryWrites=true&w=majority"
    );

    console.log("Mongo connection was successful");
  } catch (error) {
    throw new Error("Mongo connection failed -" + error);
  }
};

export default connectToDB;

// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://arbor0711:123!@#qwe@cluster1.alhxoig.mongodb.net/dashboard?retryWrites=true&w=majority"
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//   console.log("connection open");
// });
