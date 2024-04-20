const CircuitBreaker = require('opossum')

const config = {
  timeout: 10000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000,
}

const circuitBreakerAuth = new CircuitBreaker((func, 
  req, res, next) => func(req, res, next), config)

  
const circuitBreakerProduct = new CircuitBreaker((func, 
  req, res, next) => func(req, res, next), config)

circuitBreakerAuth.fallback((func, req, res, next) => {
  console.log("Error: service unavailable");
  res.status(503).send('Service Unavailable');
});

circuitBreakerProduct.fallback((func, req, res, next) => {
  console.log("Error: service unavailable");
  res.status(503).send('Service Unavailable');
});

const circuitBreakerAuthMiddleware = (func) => (req, res, next) => {
  circuitBreakerAuth.fire(func, req, res, next)
}

const circuitBreakerProductMiddleware = (func) => (req, res, next) => {
  circuitBreakerProduct.fire(func, req, res, next)
}

module.exports = {
  circuitBreakerAuthMiddleware,
  circuitBreakerProductMiddleware
}