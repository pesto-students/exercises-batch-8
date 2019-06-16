
function findElement([...args],operatorFunction) {
 args.find(function(element){
        return operatorFunction(element);
 });
}

export {
  findElement,
};
