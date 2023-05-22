const fs = require('fs');
const path = require('path');
const svgToDataUrl = require('svg-to-dataurl');

const svgDirectory = './flags/4x3';
let flags = {};

fs.readdirSync(svgDirectory).forEach((filename) => {
  if (filename.endsWith('.svg')) {
    const filePath = path.join(svgDirectory, filename);
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const dataURL = svgToDataUrl(svgContent);
    const key = path.parse(filename).name;
    flags[key] = dataURL;
  }
});

const getFlagFunction = `
export function getFlag(filename) {
  return flags[filename];
}
`;

let flagsContent = `export const flags = ${JSON.stringify(flags, null, 2)};\n`;
flagsContent += getFlagFunction;

const flagsFilePath = path.resolve(__dirname, './flags.ts');

fs.writeFileSync(flagsFilePath, flagsContent);

console.log('Flags are cool.');