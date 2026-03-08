const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next) {
  const token = req.cookies.jwt_token;

  if (!token) {
    return res.status(403).json({
      message: "Not a registered user!!",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
  }

  req.user = decoded;

  next();
}

module.exports = identifyUser;
