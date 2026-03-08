const mongoose = require("mongoose");

async function connectToDB() {
  const response = await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MONGO_DB");
}

module.exports = connectToDB;
