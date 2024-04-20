const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb://mongoadmin:admin@localhost:27017";
const port = 8081;

mongoose.connect(mongoString, {
    dbName: 'products',
});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

const routes = require('./routes');

app.use('/api', routes)

app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})