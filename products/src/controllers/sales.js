const Product = require('../models/product');
const Sale = require('../models/sales');

const createSale = async (req, res) => {
    const { productId, quantity } = req.body;
    const userName = req.user.name
    
    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }
        if (product.quantity < quantity) {
            return res.status(400).send('Not enough quantity');
        }
        const { name, price } = product;
        const productName = name;
        const totalPrice = price * quantity;
        product.quantity -= quantity;
        await product.save();

        const sale = new Sale(productName, quantity, totalPrice, userName);
        sale.save();
        res.status(201).send(sale);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getSales = async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.status(200).send(sales);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createSale,
    getSales
}