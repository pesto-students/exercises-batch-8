
function squareNumbersArray(...args) {
  args.map((i)=>{if(typeof(i)!=='number'){
          throw new Error('My custom error');
        }
})
return args.map(element=>element*element);
}


export {
  squareNumbersArray,
};
