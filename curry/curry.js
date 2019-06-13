
function curry(...args) {
    return args => {
        return  args[0];
    };
}



export {
  curry,
};
