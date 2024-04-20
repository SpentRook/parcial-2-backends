const express = require('express');
const productsController = require('../controllers/products');
const salesController = require('../controllers/sales');
const auth = require('../middlewares/auth');
const checkRoles = require('../middlewares/checkRoles');

const router = express.Router()

router.post('/products', auth,  checkRoles(["admin"]), productsController.createProduct);
router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', auth,  checkRoles(["admin"]), productsController.updateProduct);
router.delete('/products/:id', auth,  checkRoles(["admin"]), productsController.deleteProduct);

router.post('/sales', auth,  checkRoles(["client", "admin"]), salesController.createSale);
router.get('/sales', auth,  checkRoles(["admin"]), salesController.getSales);

module.exports = router;
