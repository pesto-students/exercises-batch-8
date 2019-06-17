function tripleAndFilter([...args]) {
  return args.reduce((accumultaor, current) => {
    if ((current * 3) % 5 === 0) {
      return [...accumultaor, current * 5];
    }
  }, []);
}

export { tripleAndFilter };
