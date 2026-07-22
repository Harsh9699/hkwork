const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

const dir = path.join(__dirname, 'public', 'certificates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

files.forEach(file => {
  const pdfParser = new PDFParser(this, 1);
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
  pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log(`\nFile: ${file}`);
    console.log(pdfParser.getRawTextContent().slice(0, 200).replace(/\r\n/g, ' '));
  });
  pdfParser.loadPDF(path.join(dir, file));
});
