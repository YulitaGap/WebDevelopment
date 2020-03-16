function maxTotal(inArr) {
    if(inArr.length!= 10)
    {
        return "Wrong array size";
    }
    inArr.sort(function(a, b){return a-b});
    inArr = inArr.slice(Math.max(inArr.length - 5, 1))
    return inArr.reduce((a, b) => a + b, 0)
}

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); //43;
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); //100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //40
