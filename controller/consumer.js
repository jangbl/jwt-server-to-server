const config = require("../config");

function consume(req, res) {
  // don't use console.log in prod because it is not async
  console.log(
    `[${config.serverName}] received ${JSON.stringify(req.body, null, 2)}`
  );
  console.log(
    `[${config.serverName}] decoded token ${JSON.stringify(req.token, null, 2)}`
  );
  res.sendStatus(204);
}

module.exports = { consume };
