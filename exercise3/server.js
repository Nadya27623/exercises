const express = require('express');
const moment = require('moment');
const users = require('./users'); 
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("This is the home page");
});


app.get('/about', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'response success',
        description: 'exercise #02 - ExpressJS',
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    });
});


app.get('/users', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Users retrieved successfully',
        users: users
    });
});


app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
