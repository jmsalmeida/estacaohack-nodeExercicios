const Excel = require(`exceljs`);
const fs = require(`fs`);
const clientes = require(`./clientes.json`);


const workbook = new Excel.Workbook();
const sheet = workbook.addWorksheet(`Clientes`);

function percorrerCLientes(Listaclientes){
  for (let cliente of Listaclientes){
    sheet.addRow(cliente); 
  }
}

sheet.columns = [
  { header: `Id`, key: `id`, width: 50 },
  { header: `Name`, key: `name`, width: 30 },
  { header: `Email`, key: `email`, width: 50, },
  { header: `City`, key: `city`, width: 30, outlineLevel: 1 },
];

percorrerCLientes(clientes);

workbook.xlsx.writeFile('clientes.xlsx')
    .then(function() {
        console.log('Done');
        
    });