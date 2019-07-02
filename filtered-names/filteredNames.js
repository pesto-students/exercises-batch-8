
const fs = require('fs');

function filteredNames(filePath, fileExtention) {
  const files = fs.readdirSync(filePath);
  const filteredFiles = files.filter(file => file.endsWith(fileExtention));
  return filteredFiles;
}

export {
  filteredNames,
};
