const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 3000;

app.listen(port, _ => console.log(`Servidor on porta ${port}`));
