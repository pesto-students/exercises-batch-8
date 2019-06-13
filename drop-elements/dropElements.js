
function dropElements([...args], operatorFunction) {
   return     args.filter((element)=>{
         operatorFunction(element);
       });
}

export {
  dropElements,
};
