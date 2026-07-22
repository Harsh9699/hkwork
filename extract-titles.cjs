const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function extract() {
  const dir = path.join(__dirname, 'public', 'certificates');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(dir, file));
    try {
      const parse = typeof pdfParse === 'function' ? pdfParse : pdfParse.default;
      const data = await parse(dataBuffer);
      console.log(`\nFile: ${file}`);
      const lines = data.text.split('\n').filter(l => l.trim().length > 0);
      console.log('Lines:', lines.slice(0, 10));
    } catch (e) {
      console.log(`Failed to parse ${file}: ${e.message}`);
    }
  }
}
extract();
