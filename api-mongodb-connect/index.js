const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const expressMongoDb = require('express-mongo-db');
const port = 3000;

app.use(bodyParser.json());
app.use(expressMongoDb(`mongodb://localhost/churros`));

app.post('/churro', (req, res) => {
  req.db.collection('sabores').insert(req.body, error => {
    if(error){
      res.send(`Failed to insert data`);
      return;
    }
    res.send(req.body);

  });
});

app.get('/churros', (req, res) => {
  req.db.collection('sabores').find().toArray((error, data) => {
    if(error){
      res.status(500).send();
      return;
    }
    res.send(data);
  });
});

app.listen(port, _ => console.log(`Servidor on porta ${port}`));

