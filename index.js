const express = require('express');

const app = express()

app.get('/teste', (requ,res) => {
   return res.json({hello: 'world' })  
});

app.listen(3333);
