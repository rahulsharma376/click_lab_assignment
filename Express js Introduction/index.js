const express = require('express');
const app = express();

app.get('', (req, res) =>{
    res.send(`
    <h1>Hello World. Nice to meet you. Its a homepage.</h1>
    <a href="/about">Go to About Section </a>
    `);
});


app.get('/about', (req, res) =>{
    res.send(`
    <input type="text" placeholder="user name" value="${req.query.name}" />
    <button><a href="/">submit here</a></button>
    <a href = "/">Go to Home Page</a>
    `);
});

app.get('/help', (req, res) =>{
    res.send(
        [
            {
                name: 'Ankit',
                address: '38 Para Resue street',
                email: 'ankit@tester.com'
            },
            {
                name: 'Arvind Kejriwal',
                address: 'Delhi',
                email: 'Delhi@pradhanmantri.com'
            },
            {
                name: 'youte Bent',
                address: 'vone Q1 street',
                email: 'bent@handler.com'
            }
        ]
    );
});

app.listen(5000);