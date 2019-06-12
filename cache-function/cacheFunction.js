var history=[];
function cacheFunction(...args) {
        if(args.length===0){

                return function(){};
        }
        if (typeof (args[0]) === 'number'&& !history.includes(args[0])) {
                history.push(args[0]);
                return args[0]*args[0];
        }
        if (typeof (args[0]) === 'boolean' && !history.includes(args[0])) {
                history.push(args[0]);
                return undefined;
        }
}

export {
  cacheFunction,
};
