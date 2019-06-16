
function truthCheck([...args],property) {
        let flag=true;
   args.forEach((element)=>{
           if ((element[property] !== 'male' && element[property] !== 'female'
                   && element[property] === Boolean
           ) || element[property] === undefined || element[property] === null||
           element['age']>0||
           element[property].length===0
           ){
           flag=false};
   });
return flag;
}

export {
  truthCheck,
};
