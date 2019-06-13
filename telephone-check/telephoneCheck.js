
function telephoneCheck([...args]) {
        let regex = /-?[0-9]|[(,)]/;
  return args.filter((element)=>                element.match(/\d/)).length>7
          && /-?[0-9]|[(,)]|[^\s]/.test(args.join())
  ?true:false;
}

export {
  telephoneCheck,
};
