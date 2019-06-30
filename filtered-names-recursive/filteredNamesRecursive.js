
const fs = require('fs');
const path = require('path');

const hasExtn = extn => fileName => fileName.endsWith(`.${extn}`);

function filteredNamesRecursive(directoryPath, fileExtn) {
  const extnValidator = hasExtn(fileExtn);

  const fsDirectObjects = fs.readdirSync(directoryPath, { withFileTypes: true });
  const directories = fsDirectObjects.filter(obj => obj.isDirectory()).map(obj => obj.name);
  const files = fsDirectObjects.filter(obj => obj.isFile()).map(obj => obj.name);

  let fileNames = directories.reduce((acc, dirName) => {
    const subDirPath = path.join(directoryPath, dirName);
    const subDirFiles = filteredNamesRecursive(subDirPath, fileExtn);
    return [...acc, ...subDirFiles];
  }, []);

  fileNames = [...files, ...fileNames];

  return fileNames.filter(extnValidator);
}

export {
  filteredNamesRecursive,
};
