
const normalizePath = (pathToNormalize) => {
  const pathSegments = pathToNormalize.split('/');
  const newPath = [];
  for (const segment of pathSegments) {
    if (segment === '..') {
      newPath.pop();
    } else {
      newPath.push(segment);
    }
  }
  return newPath.join('/');
};

function stripPath(pathToBeStriped, pathToStrip) {
  if (!pathToStrip) {
    return pathToBeStriped;
  }

  const toBeStriped = normalizePath(pathToBeStriped);
  const toStrip = normalizePath(pathToStrip);

  const strippedPath = toBeStriped.replace(toStrip, '');
  const stripedPathWithNoSlash = strippedPath.replace(/^\//, '');

  return stripedPathWithNoSlash;
}

export {
  stripPath,
};
