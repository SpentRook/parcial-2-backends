const { AUTH, HTTP_METHODS } = require("../config/constants");
const { httpRequestWithCircuitBreaker } = require("./http-request")

const login = async (req, email, password) => {
    const user = await httpRequestWithCircuitBreaker(
        `${AUTH.BASE_URL+AUTH.LOGIN}`, HTTP_METHODS.POST, req.headers, { email, password }
    );

    return user;
}

const validate = async (req) => {
    const URL = `${AUTH.BASE_URL+AUTH.VALIDATE}`
    console.log(URL)
    const user = await httpRequestWithCircuitBreaker(
        URL, HTTP_METHODS.GET, req.headers
    );
    return user;
}

const signup = async (req, email, password, name) => {
    const user = await httpRequestWithCircuitBreaker(
        `${AUTH.BASE_URL+AUTH.SIGNUP}`, HTTP_METHODS.POST, req.headers, { email, password, name }
    );

    return user;
}

module.exports = {
    login,
    validate,
    signup
}

