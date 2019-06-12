
function booWho(...args) {
        if (typeof (args[0]) === 'boolean') {
                return true;
        }
        if (typeof (args[0]) === 'object') {
                return false;
        } if (typeof (args[0]) === 'number') {
                return false;
        }
        if (typeof (args[0]) === 'string') {
                return false;
        }
}

export {
  booWho,
};
