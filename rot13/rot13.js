
function rot13(...args) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}


//console.log(rot13("HELLO WORLD!"))





export {
  rot13,
};
