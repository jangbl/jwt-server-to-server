const tokenService = require('../service/token');
const config = require('../config');
const axios = require('axios');

async function produce(req, res) {
    const tokenPayload = {
        tokenOrigin: `this token was created by ${config.serverName}`,
    };
    const token = tokenService.buildToken(config.partnerServerName, tokenPayload);

    const reqConfig = {
        headers: {
            Authorization: `Bearer: ${token}`,
        }
    }

    try {
        const partnerServerHostAndPort = `${config.partnerServerHost}:${config.partnerServerPort}`;
        console.log(`[${config.serverName}] sending request to consumer: ${partnerServerHostAndPort}`);
        const payload = {
            origin: `this message is in the body of the HTTP request and comes from ${config.serverName}`,
        }
        const url = `http://${partnerServerHostAndPort}/api/consume`;
        await axios.post(url, payload, reqConfig);
    } catch (err) {
        console.error(`[${config.serverName}] ${err}`);
        return res.status(500).json('something went wrong');
    }

    console.error(`[${config.serverName}] data exchange successfully finished`);
    res.sendStatus(204);
}

module.exports = {produce};