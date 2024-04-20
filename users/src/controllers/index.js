// Controller for signup, login, and other user related operations

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { email, password, name } = req.body;
    const user = new User({ email, password, name });
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400
        ).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ email, role: user.role, name: user.name},
        'secret key',
        { expiresIn: '1h' });
    res.status(200).send({token});
}

const validateToken = (req, res) => {
    console.log(req.headers)
    const token = req.header('Authorization')?.split(' ').pop();
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    try {
        const decoded = jwt.verify(token, 'secret key');
        res.status(200).send(decoded);
    } catch (error) {
        console.log(error)
        res.status(400).send('Invalid Token');
    }
}

module.exports = {
    signup,
    login,
    validateToken
}