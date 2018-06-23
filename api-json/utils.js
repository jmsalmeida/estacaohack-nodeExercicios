const fs = require('fs');

const gravarArquivo = (titulo, texto) => {
  fs.writeFile(titulo, texto, error => {
    if (error) {
      console.log('Deu erro!');
    } else {
      console.log('Deu certo!');
    }
  });
}

module.exports = { gravarArquivo };