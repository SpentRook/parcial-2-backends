const { PRODUCTS, HTTP_METHODS } = require("../config/constants");
const { httpRequestWithCircuitBreaker } = require("./http-request")

const createProduct = async (req, name, price, quantity, imageUrl) => {
    console.log(`${PRODUCTS.BASE_URL + PRODUCTS.ADD_PRODUCT}`)
    const product = await httpRequestWithCircuitBreaker(
        `${PRODUCTS.BASE_URL + PRODUCTS.ADD_PRODUCT}`, HTTP_METHODS.POST, req.headers, { name, price, quantity, imageUrl }
    );

    return product;
}

const getProducts = async (req) => {
    console.log(`${PRODUCTS.BASE_URL + PRODUCTS.GET_PRODUCTS}`)
    const products = await httpRequestWithCircuitBreaker(
        `${PRODUCTS.BASE_URL + PRODUCTS.GET_PRODUCTS}`, HTTP_METHODS.GET, req.headers
    );

    return products;
}

const getProduct = async (req, id) => {
    const product = await httpRequestWithCircuitBreaker(
        `${PRODUCTS.BASE_URL + PRODUCTS.GET_PRODUCT + id}`, HTTP_METHODS.GET, req.headers
    );

    return product;
}

const updateProduct = async (req, id, name, price, quantity, imageUrl) => {
    const product = await httpRequestWithCircuitBreaker(
        `${PRODUCTS.BASE_URL + PRODUCTS.GET_PRODUCT + id}`, HTTP_METHODS.PUT, req.headers, { name, price, quantity, imageUrl }
    );

    return product;
}

const deleteProduct = async (req, id) => {
    const product = await httpRequestWithCircuitBreaker(
        `${PRODUCTS.BASE_URL + PRODUCTS.DELETE_PRODUCT + id}`, HTTP_METHODS.DELETE, req.headers
    );

    return product;
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}