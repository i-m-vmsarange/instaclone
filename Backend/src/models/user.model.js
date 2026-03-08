const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists!!!"],
    required: [true, "username is required!!"],
  },
  email: {
    type: String,
    unqiue: [true, "email already exists!!"],
    required: [true, "email is required!!"],
  },
  password: {
    type: String,
    required: [true, "password is required!!"],
  },
  bio: {
    type: String,
    default: "",
  },
  profileImg: {
    type: String,
    default:
      "https://ik.imagekit.io/vmsarange/default-image.jpg?updatedAt=1771475228977",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
