const moduloMaroto = require('./moduloMaroto');
let varForaFuncaoMesmoArquivo = "Estou fora da funcao mas no mesmo arquivo!";

async function teste() {
    let varDentroFuncaoMesmoArquivo = "Estou dentro da funcao mas no mesmo arquivo!";
    console.log(`${varDentroFuncaoMesmoArquivo}`);
    console.log(`${varForaFuncaoMesmoArquivo}`);
    
    console.log(`${moduloMaroto.variavelSuperImportanteMarota}`);
    
}

teste();