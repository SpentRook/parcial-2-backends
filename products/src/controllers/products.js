const Product = require('../models/product');


const createProduct = async (req, res) => {
    const { name, price, quantity, imageUrl } = req.body;
    const product = new Product({ name, price, quantity, imageUrl });
    try {
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500 ).send(error);
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity, imageUrl } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(id, { name, price, quantity, imageUrl }, { new: true });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    }
    catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}