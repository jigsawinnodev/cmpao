const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = process.env;

const verifyToken = (req, res, next) => {
    // console.log(req.headers);
    const authHeader = req.headers['authorization'];
    // console.log(authHeader);
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        // console.log(decoded);
        req.user = decoded
    } catch (error) {
        return res.json({
            status: false
        });
    }
    return next();
}
module.exports = verifyToken;