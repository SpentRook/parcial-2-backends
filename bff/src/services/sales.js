const { SALES, HTTP_METHODS } = require("../config/constants");
const { httpRequestWithCircuitBreaker } = require("./http-request")

const createSale = async (req, productId, quantity) => {
    const sale = await httpRequestWithCircuitBreaker(
        `${SALES.BASE_URL + SALES.ADD_SALE}`, HTTP_METHODS.POST, req.headers, { productId, quantity }
    );

    return sale;
}

const getSales = async (req) => {
    const sales = await httpRequestWithCircuitBreaker(
        `${SALES.BASE_URL + SALES.GET_SALES}`, HTTP_METHODS.GET, req.headers
    );

    return sales;
}

module.exports = {
    createSale,
    getSales
}