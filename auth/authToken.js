const jwt = require("jsonwebtoken");
const secrets = require('./secrets.js');

module.exports = {
    generateToken
};

function generateToken(user) {
    console.log(user);
    const payload = {
        userID: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '5d'
    };

    return jwt.sign(payload, secrets.jwtSecret, options)

}