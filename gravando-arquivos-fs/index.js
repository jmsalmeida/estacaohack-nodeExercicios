const fs = require('fs');
let titulo = process.argv[2];
let conteudo = process.argv[3];

fs.writeFile(titulo, conteudo, error => {
  if(error){
    console.log('Houve um erro ao gravar o arquivo');
  } else {
    console.log(`${titulo}.txt salvo com sucesso`);
  }
});