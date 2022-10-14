const express = require('express')

const app = express();

app.get('/',(req,res) =>{
  console.log(req);
  res.send(`<h1>Welcome to Prepbytes!! Login</h1>`)
})
app.get('/login',(req,res) =>{
  console.log(req);
  res.send(`<h1>Hi Kava!! your  successfully loggedin </h1>`)
})
app.listen('4000',(req,res) =>{
  console.log(req);
  
})
