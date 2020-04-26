module.exports = {
  partnerServerHost: "localhost",
  partnerServerPort: process.env.PARTNER_SERVER_PORT,
  partnerServerName: process.env.PARTNER_SERVER_NAME,

  hostname: "localhost",
  serverName: process.env.SERVER_NAME,
  port: process.env.PORT,

  // in prod, use a stronger secret
  tokenSecret: 'mysecret',
};
