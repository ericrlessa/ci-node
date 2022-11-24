const express = require('express')
const calc = require('./calc')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/sum', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.send("" + calc.sum(a, b))
})

app.get('/sub', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.send("" + calc.sub(a, b))
})

app.get('/times', (req,res) => {
    a = Number(req.query.a) 
    b = Number(req.query.b) 
    res.send("" + calc.times(a, b))
})

app.get('/squared', (req,res) => {
    a = Number(req.query.a) 
    res.send("" + calc.squared(a))
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})