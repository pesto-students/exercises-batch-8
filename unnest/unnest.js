function unnest([...obj]) {
  const arrays = obj.reduce((a, b) => a.concat(b), []);
  return arrays;
}

export { unnest };
