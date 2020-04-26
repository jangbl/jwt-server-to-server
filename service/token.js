const config = require("../config");
const jwt = require("jsonwebtoken");

const verifyOptions = {
  algorithms: ["HS256"], // only allow HMAC with SHA256
  // audience: `${config.hostname}:${config.port}`,
  // issuer: config.partnerServerName,
};

const signOptions = {
    algorithm: 'HS256',  // HMAC + SHA256
    expiresIn: 15 * 60, // expires in 15min
    issuer: config.serverName,
    audience: `${config.partnerServerHost}:${config.partnerServerPort}`,
};

function buildToken(subject, payload = {}) {
    const options = {...signOptions, subject};
    return jwt.sign(payload, config.tokenSecret, options);
}

function verifyToken(token) {
  try {
    return jwt.verify(token, config.tokenSecret, verifyOptions);
  } catch (err) {
    // in prod, don't use console.log because it is synchronous
    console.log(err);
    return null;
  }
}

module.exports = {
    buildToken,
    verifyToken,
}
