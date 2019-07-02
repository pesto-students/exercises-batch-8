import path from 'path';

function stripPath(fullPath, subPath) {
  if (!subPath) {
    return fullPath;
  }
  const normalizedPath = path.normalize(fullPath);
  const normalizedSubPath = path.normalize(subPath);
  let replaced = normalizedPath.replace(normalizedSubPath, '');
  if (replaced.startsWith(path.sep)) {
    replaced = replaced.substring(1);
  }
  return replaced;
}

export {
  stripPath,
};
