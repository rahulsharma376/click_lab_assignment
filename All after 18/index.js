const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile', (_,resp) => {
    const user = {
        name: 'Rahul',
        email: 'rahul.376@developer.com',
        city: 'Banur, Punjab',
        skills: ['php','js','c++','java','node']
    }
    resp.render(`profile`, {user});
})

app.get('/login', (_,resp) => {
    resp.render('login');
})
// app.use(express.static(publicPath));
app.get('/', (_,resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_,resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('/help', (_,resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('/*', (_,resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});
app.listen(5000);