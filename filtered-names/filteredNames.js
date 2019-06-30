const util = require('util');
const fs = require('fs');

const readdirPromise = util.promisify(fs.readdir);

async function getFiles(dir) {
  const files = await readdirPromise(dir);
  return files;
}

function filteredNames(dir, extension) {
  const filtered = getFiles(dir).then(files => files.filter(file => file.includes(extension)));
  return filtered;
}

export { filteredNames };
