const AUTH = {
    BASE_URL: "http://localhost:8080/api/auth",
    LOGIN: `/login`,
    VALIDATE: `/validate`,
    SIGNUP: `/signup`
}

const PRODUCTS = {
    BASE_URL: "http://localhost:8081/api",
    GET_PRODUCTS: `/products/`,
    GET_PRODUCT: `/products/`,
    ADD_PRODUCT: `/products/`,
    UPDATE_PRODUCT: `/products/`,
    DELETE_PRODUCT: `/products/`,
    PURCHASE: `/sales/`,
    GET_SALES: `/sales/`
}

const SALES = {
    BASE_URL: "http://localhost:8081/api/",
    GET_SALES: `/sales/`,
    GET_SALE: `/sales/`,
    ADD_SALE: `/sales/`,
    UPDATE_SALE: `/sales/`,
    DELETE_SALE: `/sales/`

}

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

module.exports = {
    AUTH,
    PRODUCTS,
    HTTP_METHODS,
    SALES
}