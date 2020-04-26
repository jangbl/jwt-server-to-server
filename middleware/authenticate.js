const tokenService = require("../service/token");

function authenticate(req, res, next) {
  // Authorization: Bearer <jwt-token>

  // 1. extract Authrorization header
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    return res.status(401).json("missing token");
  }

  // 2. extract the JWT
  // "Bearer: my-jwt-token"
  const token = authorizationHeader.substring(8);

  // 3. decode token
  const decodedToken = tokenService.verifyToken(token);

  if (!decodedToken) {
    return res.status(401).json("invalid token");
  }
  req.token = decodedToken;
  next();
}

module.exports = authenticate;
