const fs = require("fs");

function loadKey(path) {
  if (!path) {
    return null;
  }
  try {
    return fs.readFileSync(path);
  } catch (err) {
    console.error(err);
    // don't use process.exit in prod
    // rather do a graceful
    process.exit(1);
  }
}

module.exports = {
  partnerServerHost: "localhost",
  partnerServerPort: process.env.PARTNER_SERVER_PORT,
  partnerRSAPublicKey: loadKey(process.env.PARTNER_JWT_RSA_PUBLIC_KEY),

  hostname: "localhost",
  serverName: process.env.SERVER_NAME,
  port: process.env.PORT,
  rsaPrivateKey: loadKey(process.env.JWT_RSA_PRIVATE_KEY),

  // in prod, use a stronger secret
  hmacSecret: process.env.HMAC_SECRET,
};
