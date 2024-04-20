const express = require('express');
const { signup, login, validateToken } = require('../controllers');

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/validate', validateToken)

module.exports = router;