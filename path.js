const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Home Page!</h1>');
})

app.get('/Home/contact',(req,res)=>{
    res.send('<h1>Welcome to the Contact Page!</h1>');
    console.log('Contact page accessed');
})

app.get('/Home/:name',(req,res)=>{
    res.send(`<h1>Welcome to the Contact Page!</h1><p>Hello, ${req.params.name}!</p>`);
    console.log('Contact page accessed');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})