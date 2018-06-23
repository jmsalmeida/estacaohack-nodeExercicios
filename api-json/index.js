const express = require('express');
const bodyParser = require('body-parser');
// const fs = require('fs');

const utils = require('./utils.js'); //Funções JS

const app = express();
app.use(bodyParser.json())
const porta = 3000;

app.post('/save-file', (req, res) => {
  let titulo = req.body.titulo;
  let texto = req.body.texto;

  utils.gravarArquivo(titulo, texto);
  res.send(req.body);

});



app.listen(porta, _ => console.log(`Servidor online na porta ${porta}`));