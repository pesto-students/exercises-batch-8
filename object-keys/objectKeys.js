
function objectKeys(obj) {
        let resultArray=[];
        Object.keys(obj).forEach(function (key) {
                resultArray.push(key);
        });
        return resultArray;
}

export {
  objectKeys,
};
