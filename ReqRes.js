const express = require('express');
const colors = require('colors');
const app = express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

app.use((req,res)=>{
    console.log('Middleware executed');
    res.send('<h1>Hello, World!</h1>');
})