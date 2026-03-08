const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password, bio } = req.body;

  console.log(username, email, password, bio);

  const dbUser = await userModel.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (dbUser) {
    return res.status(409).json({
      message: "User with given email or username already exists!!!",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("jwt_token", token);

  return res.status(201).json({
    message: "User registered successfully!!!",
    user,
  });
}

module.exports = {
  registerUser,
};
