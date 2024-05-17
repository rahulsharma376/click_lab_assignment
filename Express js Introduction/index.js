const express = require('express');
const app = express();

app.get('', (req, res) =>{
    res.send('Hello World. Nice to meet you.');
});

app.get('/home', (req, res) =>{
    res.send("Hello, It's home page");
});

app.get('/about', (req, res) =>{
    res.send("Hello, It's About section.");
});

app.listen(5000);