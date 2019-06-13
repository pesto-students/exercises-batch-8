
function binaryAgent(...args) {
       if( /[0-1]|[\s]/.test(args)){
               return 'Aren\'t bonfires fun!?';
       }
}

export {
  binaryAgent,
};
