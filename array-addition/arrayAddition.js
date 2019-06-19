// WIP


function resizeSmallerArray(arr1, arr2) {
    let array1 = arr1;
    let array2 = arr2;
    const sizeArray1 = array1.length;
    const sizeArray2 = array2.length;
    
    if (sizeArray1 < sizeArray2) {
        let sizeDiff = sizeArray2 - sizeArray1;
        for (let i = 0; i < sizeDiff; i++) {
            array1.push(0);
        }
        return array1;
    } 

    let sizeDiff = sizeArray1 - sizeArray2;
    for (let i = 0; i < sizeDiff; i++) {
            array2.push(0);
    }
    return array2;
    
}

function arrayAddition(array1, array2) {
  
}

export {
  arrayAddition,
};
