const config = require('../../config');

const defaultSignOptions = {
  expiresIn: 15 * 60, // expires in 15min
  issuer: config.serverName,
  audience: `${config.partnerServerHost}:${config.partnerServerPort}`,
};

const hmacSignOptions = {
    algorithm: 'HS256',
    ...defaultSignOptions
}

const hmacVerifyOptions = {
  algorithms: ["HS256"], // only allow HMAC with SHA256
  // audience: `${config.hostname}:${config.port}`,
  // issuer: config.partnerServerName,
};

const rsaVerifyOptions = {
    // only allow RSA + SHA256
    algorithms: ["RS256"],
}

const rsaSignOptions = {
    algorithm: 'RS256',
    ...defaultSignOptions
}

function getSigningConfig(subject) {
    if (config.rsaPrivateKey) {
        return {
            options: {...rsaSignOptions, subject},
            secret: config.rsaPrivateKey
        };
    }
    return {
        options: {...hmacSignOptions, subject},
        secret: config.hmacSecret,
    }
}

function getVerifyConfig(subject) {
    if (config.rsaPrivateKey) {
        return {
            options: rsaVerifyOptions,
            secret: config.partnerRSAPublicKey,
        };
    }
    return {
        options: hmacVerifyOptions,
        secret: config.hmacSecret,
    }
}

module.exports = {
    getVerifyConfig,
    getSigningConfig,
}



