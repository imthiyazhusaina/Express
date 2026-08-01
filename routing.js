const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Home Page!</h1>');
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/about',(req,res)=>{
    res.send('<h1>POST request to the About Page</h1>');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
