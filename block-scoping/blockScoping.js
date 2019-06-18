function blockScoping(input) {
  const array = [];
  for (let i = 0; i <= 10; i += 1) {
    array.push(() => i);
  }
  return array[input]();
}

export { blockScoping };
