/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const content = `
describe('XYZ', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
`;

function camelCaseName(str) {
  const strArray = str.split('-');
  return strArray.reduce((acc, curr) => acc + curr[0].toUpperCase() + curr.slice(1));
}

function createTestFile(folderName, testContent) {
  if (folder === undefined) {
    throw new Error('Undefined folder');
  }

  try {
    fs.readdirSync(folderName);
  } catch (e) {
    console.error(e.message);
  }

  const fileName = `${camelCaseName(folderName)}.test.js`;
  const filePath = path.join(folderName, fileName);
  fs.writeFileSync(filePath, testContent);
}

createTestFile(folder, content);
