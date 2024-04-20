const router = require('express').Router();

const authController = require('../controllers/auth');
const productsController = require('../controllers/products');
const salesController = require('../controllers/sales');
const {circuitBreakerProductMiddleware, circuitBreakerAuthMiddleware} = require('../services/circuit-breaker');

router.post('/login', circuitBreakerAuthMiddleware(authController.loginController));
router.get('/validate', circuitBreakerAuthMiddleware(authController.validateController));
router.post('/signup', circuitBreakerAuthMiddleware(authController.signupController));

router.post('/products', circuitBreakerProductMiddleware(productsController.createProduct));
router.get('/products', circuitBreakerProductMiddleware(productsController.getProducts));
router.get('/products/:id', circuitBreakerProductMiddleware(productsController.getProduct));
router.put('/products/:id', circuitBreakerProductMiddleware(productsController.updateProduct));
router.delete('/products/:id', circuitBreakerProductMiddleware(productsController.deleteProduct));

router.post('/sales', circuitBreakerProductMiddleware(salesController.createSale));
router.get('/sales', circuitBreakerProductMiddleware(salesController.getSales));

module.exports = router;
