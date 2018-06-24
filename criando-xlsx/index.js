const Excel = require(`exceljs`);
const fs = require(`fs`);
const clientes = require(`./clientes.json`);

let workbook = new Excel.Workbook();

const date = new Date();

let objClientes = [];

function percorrerCLientes(clientes){
  
  for (let cliente of clientes){
    objClientes.push(cliente);
    
  }
  return objClientes;
}

function salvarXLSX(titulo, arquivo){
  fs.writeFile(`${titulo}.xlsx`, arquivo, error => {
    if(error){
      console.log(`Erro ao salvar o arquivo ${titulo}`);
    } else{
      console.log(`Sucesso ao gravar ${titulo}`);
    }
  })
}

workbook.creator = `James Almeida`;
workbook.lastModifiedBy = `James Almeida`;
workbook.created = new Date(2018, 6, 23);
workbook.modified = date;
workbook.properties.date1904 = true;

workbook.views = [
  {
    x: 0, 
    y: 0, 
    width: 10000, 
    height: 20000,
    firstSheet: 0,
    activeTab: 1,
    visibility: `visible`
  }
]

let sheet = workbook.addWorksheet(`Meu excel`);

sheet.columns = [
  { header: `Id`, key: `id`, width: 10 },
  { header: `Name`, key: `name`, width: 20 },
  { header: `Email`, key: `email`, width: 32, outlineLevel: 1 },
  { header: `City`, key: `city`, width: 10, outlineLevel: 1 },
];

percorrerCLientes(clientes);
stringClientes = JSON.stringify(objClientes);

salvarXLSX(`teste`, stringClientes);
