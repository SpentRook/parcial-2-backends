const productsService = require('../services/products');

const createProduct = async (req, res) => {
    const { name, price, quantity, imageUrl } = req.body;
    try {
        const product = await productsService.createProduct(req, name, price, quantity, imageUrl);
        res.status(201).send(product);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts(req);
        res.status(200).send(products);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productsService.getProduct(req, id);
        res.status(200).send(product);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity, imageUrl } = req.body;
    try {
        const product = await productsService.updateProduct(req, id, name, price, quantity, imageUrl);
        res.status(200).send(product);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productsService.deleteProduct(req, id);
        res.status(200).send(product);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}