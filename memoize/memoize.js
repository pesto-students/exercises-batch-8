
function memoize(...args,unused) {
        
        const fib = memoize((n) => {
      called += 1;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });
}

export {
  memoize,
};
