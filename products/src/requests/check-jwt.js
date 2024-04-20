//check if a jwt token is valid by sending a request to the endpoint of validateToken
// (is another microservice) and check if the token is valid (the request is made using axios)


const axios = require('axios');

const checkJwt = async (jwt) => {
    try {
        const response = await axios.get('http://localhost:8080/api/auth/validate', {
            headers: {
                Authorization: jwt
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = checkJwt;