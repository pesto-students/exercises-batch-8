
function applyOperator(...args) {
        if(args.length===0){
                throw "error";
        }
        if(args.length===1){
                return 0;
        }
        if(args[0]==='+'){
                const reducer = (accumulator, currentValue) => accumulator + currentValue;

               args.shift();return args.reduce(reducer);
        }
        if (args[0] === '-') {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;

                args.shift(); return -args.reduce(reducer);
        }
        if(args[0]==='*'){
                const reducer = (accumulator, currentValue) => accumulator * currentValue;
                args.shift(); 
                return args.reduce(reducer);
        }
        if (args[0] === '/') {
                const reducer = (accumulator, currentValue) => accumulator / currentValue;
                args.shift(); 
                return Number(args.reduce(reducer).toFixed(4));
        }
        if (args[0] === '%') {
                const reducer = (accumulator, currentValue) => accumulator %currentValue;
                args.shift(); 
                return args.reduce(reducer);
        }
  return args;
}

export {
  applyOperator,
};
