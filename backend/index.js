const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
var path = require('path');

const PORT = 3333;

app.use(session({secret: 'jndjoadjasjdbasjbdjs'}));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))
app.use(cors());

app.get('/admin', (req, res) => {
    res.json([{'titulo':"Iniciando o backend"}])
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})