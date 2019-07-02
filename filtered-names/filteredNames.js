const fs = require('fs');

function filteredNames(dirPath, fileExtension) {
  const files = fs.readdirSync(dirPath);
  const filteredFiles = files.filter(file => file.endsWith(fileExtension));
  return filteredFiles;
}

export {
  filteredNames,
};
