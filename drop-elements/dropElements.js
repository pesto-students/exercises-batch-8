
function dropElements([...args], operatorFunction) {
       return args.filter((element)=>{
        return operatorFunction(element);
       });
}

export {
  dropElements,
};
