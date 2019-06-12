function booWho(...args) {
  let x;

  try {
    x = (typeof args[0] === 'boolean');
  } catch (err) {
    console.log(err);
  }

  return x;
}

export { booWho };
