// auth middleware to check if request has authorization header and if is valid
// check the token by the requests package using the check-jwt service
// if the token is valid, the request is forwarded to the next middleware
// if not, a 401 status code is returned

const checkJwt = require('../requests/check-jwt');

const auth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('No token provided');
    }
    const response = await checkJwt(token);
    if (!response) {
        return res.status(401).send('Invalid token');
    }
    req.user = response;
    next();
}

module.exports = auth;