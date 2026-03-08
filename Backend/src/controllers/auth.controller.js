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
async function loginUser(req, res) {
  const { username, email, password } = req.body;

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

  if (!dbUser) {
    return res.status(404).json({
      message: "User with the given email or username does not exist!!!",
    });
  }

  const isValidPassword = await bcrypt.compare(password, dbUser.password);

  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid password!!",
    });
  }

  const token = jwt.sign(
    {
      id: dbUser._id,
      username: dbUser.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("jwt_token", token);
  return res.status(200).json({
    message: "User logged in successfully!!!",
    dbUser,
  });
}
async function getUser(req, res) {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  return res.status(200).json({
    message: `Current logged in user is ${user.username}`,
    user,
  });
}
module.exports = {
  registerUser,
  loginUser,
  getUser,
};
