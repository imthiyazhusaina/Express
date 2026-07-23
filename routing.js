const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Home Page!</h1>');
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('*',(req,res)=>{
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// app.use((req,res)=>{
//     res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
// });