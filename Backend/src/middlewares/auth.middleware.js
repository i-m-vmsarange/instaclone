const jwt = require("jsonwebtoken");

async function identifyUser(req, res) {
  const token = req.cookies.jwt_token;
  console.log(token);
}
identifyUser();
