const path = require('path');

function stripPath(fullPath, subPath) {
  if (!subPath) {
    return path.normalize(fullPath);
  }
  const normalizedFullPath = path.normalize(fullPath);
  const normalizedSubPath = path.normalize(subPath);
  return normalizedFullPath.replace(normalizedSubPath, '').slice(1);
}

export {
  stripPath,
};
