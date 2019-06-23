function getSubList(start, size, list) {
  const listCopy = [...list];
  if (list.length < start + size) {
    return [];
  }
  return listCopy.slice(start, start + size);
}

function aperture(n, list) {
  return list.reduce((acc, currentStartElement, index) => {
    const subList = getSubList(index, n, list);
    if (subList.length > 0) {
      return [...acc, subList];
    }
    return acc;
  }, []);
}

export { aperture };
