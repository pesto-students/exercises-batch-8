
function applyOperator(...args) {
        if(args.length===0){
                throw "error";
        }
        if(args.length===1){
                return 0;
        }
        if(args[1]==='+'){
                const reducer = (accumulator, currentValue) => accumulator + currentValue;

               return args.shift().reduce(reducer);
        }
  return args;
}

export {
  applyOperator,
};
