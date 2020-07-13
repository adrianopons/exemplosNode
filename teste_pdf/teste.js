const { PDFDocument, StandardFonts, rgb }   = require('pdf-lib');
const fs                                    = require('fs');

async function mergePdfs(pdfsToMerge) {
    const mergedPdf = await PDFDocument.create();
    

    for (const pdfCopyDoc of pdfsToMerge) {

        const pdfBytes = fs.readFileSync(pdfCopyDoc);
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
            mergedPdf.addPage(page);
        });
    }
    const mergedPdfFile = await mergedPdf.save();
    return mergedPdfFile;
}

async function executar() {
    console.log('Inicio');
    const nomeArquivo = "teste.pdf";
    await fs.writeFileSync('./' + nomeArquivo, await mergePdfs(['1.pdf', '2.pdf']));
    console.log('Fim');
}
executar();
