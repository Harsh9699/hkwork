const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const downloadsDir = 'C:\\Users\\amar9\\Downloads';
const files = fs.readdirSync(downloadsDir).filter(f => f.startsWith('certificate-') && f.endsWith('.pdf'));

async function parsePdfs() {
    for (const file of files) {
        const filePath = path.join(downloadsDir, file);
        const dataBuffer = fs.readFileSync(filePath);
        try {
            const data = await pdf(dataBuffer);
            console.log(`\n--- ${file} ---`);
            console.log(data.info);
        } catch(e) {
            console.log(`Failed to parse ${file}`);
        }
    }
}

parsePdfs();
