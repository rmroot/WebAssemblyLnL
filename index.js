const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/assets', express.static('app'));
app.use('/jquery', express.static('node_modules/jquery/dist/'));

app.listen(port, () => console.log(`Wasm Testing Served on: localhost:${port}`));


// emcc -O3 -s EXPORT_NAME="'FibModule'" --bind -o app/fibonacci.js cpp/fibonacci.cpp