
function findElement([...args],operatorFunction) {
 return args.find(function(element){
        return operatorFunction(element);
 });
}

export {
  findElement,
};
