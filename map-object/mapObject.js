
function mapObject(obj,squareFunction){
        let resultObj={};
 Object.keys(obj).forEach(function (key) {
                resultObj[key]=squareFunction(obj[key]);
        });
               return resultObj;
}

export {
  mapObject,
};
