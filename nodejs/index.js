const express = require('express')
const app = express()

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age")
    } else if(req.query.age<18){
        resp.send("You cannot access thi0s page.")
    } else{
        next();
    }
}

app.use(reqFilter)

app.get('/', (req,resp)=>{
    resp.send('Welcome to Home Page')
})

app.get('/users',(req, resp)=>{
    resp.send('Welcome to User Page')
})

app.listen(5000)
