const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/rating-app'));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname));
})

app.listen(port);

console.log('Running...');