
function reverseString(...inputString) {
        if (inputString[0].split(' ').length>0){
                return inputString[0].split("").reverse().join("")
        }
     return inputString[0].split("").reverse().join("").split(" ").reverse().join(" ");

}

export {
  reverseString,
};
