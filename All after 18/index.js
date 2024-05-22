const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile', (_,res) => {
    const user = {
        name: 'Rahul',
        email: 'rahul.376@developer.com',
        city: 'Banur, Punjab'
    }
    res.render(`profile`, {user});
})

// app.use(express.static(publicPath));
app.get('/', (_,res) => {
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_,res) => {
    res.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_,res) => {
    res.sendFile(`${publicPath}/help.html`)
});

app.get('/help', (_,res) => {
    res.sendFile(`${publicPath}/help.html`)
});

app.get('/*', (_,res) => {
    res.sendFile(`${publicPath}/index.html`)
});
app.listen(5000);