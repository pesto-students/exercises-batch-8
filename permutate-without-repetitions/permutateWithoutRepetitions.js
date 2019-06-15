function permutateWithoutRepetitions([...args]) {
  return args.reduce(permute, []);
}

function permute(res, item, key, arr) {
  return res.concat(
    (arr.length > 1
      && arr
        .slice(0, key)
        .concat(arr.slice(key + 1))
        .reduce(permute, [])
        .map(perm => [item].concat(perm)))
      || item,
  );
}

export { permutateWithoutRepetitions };
