import { arrayExpression } from '@babel/types';

function tripleAndFilter([...args]) {
  const newarr = args.map(element => element * 3);
  return newarr.filter(element => element % 5 === 0);
}

export { tripleAndFilter };
