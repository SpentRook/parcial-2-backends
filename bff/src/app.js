const express = require('express');

const port = 8083;

const app = express();

app.use(express.json());

const routes = require('./routes');

app.use('/api', routes)

app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})