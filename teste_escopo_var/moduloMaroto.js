let varForaMetodoMarotoArquivoMaroto = "Estou fora do metodoMaroto, arquivoMaroto";

async function metodoMaroto() {
    let varDentroMetodoMarotoArquivoMaroto = "Estou dentro do metodoMaroto, arquivoMaroto";

    console.log(varDentroMetodoMarotoArquivoMaroto);
}


module.exports = {
    metodoMatoro: metodoMaroto,
    variavelSuperImportanteMarota: varForaMetodoMarotoArquivoMaroto
}