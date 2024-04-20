const axios = require("axios");
const axiosRetry = require('axios-retry').default;

const circuitBreaker = require("./circuit-breaker");

axiosRetry(axios, { retries: 3,
    retryDelay: (retryCount) => {
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 2000; // time interval between retries
    }, });

const httpRequest = async (url, method, headers, data) => {
    headers = {
        headers: {
            "Authorization": headers.authorization
        }
    }
    const config = {
        url,
        method,
        data,
        headers,
    };

    try {
        let result
        switch (method) {
            case 'GET':
                result = await axios.get(url, config.headers);
                break;
            case 'POST':
                result = await axios.post(url, config.data, config.headers);
                break;
            case 'PUT':
                result = await axios.put(url, config.data, config.headers);
                break;
            case 'DELETE':
                result = await axios.delete(url, config.headers);
                break;
            default:
                throw new Error('Method not supported');
        }
        
        console.log(result.data);
        return result.data;
    } catch (error) {
        throw error;
    }
}

const httpRequestWithCircuitBreaker = async (url, method, headers, data) => {
    return await httpRequest(url, method, headers, data);
}

module.exports = {
    httpRequest,
    httpRequestWithCircuitBreaker
};