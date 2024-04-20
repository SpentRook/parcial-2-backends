const authService = require("../services/auth");
const checkAxiosError = require("../services/checkError");

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(req, email, password);
        res.status(200).send(user);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const validateController = async (req, res) => {
    try {
        const user = await authService.validate(req);
        res.status(200).send(user);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

const signupController = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = await authService.signup(req, email, password, name);
        res.status(201).send(user);
    } catch (error) {
        checkAxiosError(error, res);
    }
}

module.exports = {
    loginController,
    validateController,
    signupController
}