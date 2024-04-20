const checkAxiosError = (error, res) => {
    if (error.response?.status) {
        res.status(error.response.status).send(error.response?.data ?? "Error: check status code");
        return;
    }
    res.status(500).send(error);
}

module.exports = checkAxiosError;