const fs = require('fs');
const path = require('path');

function filteredNames(directoryPath, fileExtension) {
  const files = fs.readdirSync(directoryPath);
  return files.filter(file => file.endsWith(`.${fileExtension}`))
}

export {
  filteredNames,
};
