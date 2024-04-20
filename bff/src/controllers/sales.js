const salesService = require('../services/sales');

const createSale = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const sale = await salesService.createSale(req, productId, quantity);
        res.status(201).send(sale);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const getSales = async (req, res) => {
    try {
        const sales = await salesService.getSales(req);
        res.status(200).send(sales);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

module.exports = {
    createSale,
    getSales
}