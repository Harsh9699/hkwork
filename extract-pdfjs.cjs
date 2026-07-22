const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extract() {
  const dir = path.join(__dirname, 'public', 'certificates');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

  for (const file of files) {
    const dataBuffer = new Uint8Array(fs.readFileSync(path.join(dir, file)));
    try {
      const loadingTask = pdfjsLib.getDocument(dataBuffer);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const textContent = await page.getTextContent();
      const text = textContent.items.map(item => item.str).join(' ');
      console.log(`\nFile: ${file}`);
      console.log('Text:', text);
    } catch (e) {
      console.log(`Failed to parse ${file}: ${e.message}`);
    }
  }
}
extract();
