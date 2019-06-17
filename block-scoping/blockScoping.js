
function blockScoping(number) {
  if (typeof number !== 'number') {
    throw new Error(`Expected a number, got ${number}`);
  }
  const callbacks = [];
  for (let i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[number]();
}

export {
  blockScoping,
};
