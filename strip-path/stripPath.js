
const path = require('path');

function stripPath(pathToStrip, stripArgument) {
  const relPath = path.relative('./', pathToStrip);
  if (typeof stripArgument !== 'string') {
    return pathToStrip;
  }
  return path.relative(stripArgument, relPath);
}


export { stripPath };