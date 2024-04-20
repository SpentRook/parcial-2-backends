const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb://mongoadmin:admin@localhost:27017";
const port = 8080;
mongoose.connect(mongoString, {
    dbName: 'users',
});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', async () => {
    console.log('Database Connected');
    initializeAdmin()
})
const app = express();

app.use(express.json());

const routes = require('./routes');
const initializeAdmin = require('./scripts/initializer_admin');

app.use('/api/auth', routes)

app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})