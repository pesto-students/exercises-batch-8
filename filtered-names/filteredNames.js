const fs = require('fs');

function filteredNames(dirPath, fileType) {
  const files = fs.readdirSync(dirPath);
  const filteredFileNames = files.filter(file => file.endsWith(`.${fileType}`));
  return filteredFileNames;
}

export {
  filteredNames,
};
