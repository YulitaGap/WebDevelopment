function toArray(inObj){
    var outArr = Array();
    if (inObj)
    {
        outArr =  Object.entries(inObj);
    }
    return outArr; 
}

// console.log(toArray({ key1: 'value1', key2: 'value2' }));  // [["key1", "value1"], ["key2", "value2"]]
// console.log(toArray({})); // []
