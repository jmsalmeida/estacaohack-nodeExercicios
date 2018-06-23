const express = require('express');
const bodyParser = require('body-parser');

const porta = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Olá Mundo!'));

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(porta, _ => {
  console.log(`Servidor iniciado na porta ${porta}`);
})