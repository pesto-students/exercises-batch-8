import path from 'path';


function convertToFileUrl(filePath) {
  const p = path.join(filePath);
  if (p.startsWith('/')) {
    p.splice(0, p.length);
  }
  return encodeURI(`file:///${p}`);
}

export {
  convertToFileUrl,
};
