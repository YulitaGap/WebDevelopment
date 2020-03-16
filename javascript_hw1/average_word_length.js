function  avgWordLengthCalc(inStr){
    var avgLen = 0;
    if (inStr)
    {
        var inWords = inStr.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ").split(" ");

        for (var word of inWords)
        {
            avgLen += word.length;
        }
        avgLen /= inWords.length;
        return avgLen.toFixed(2);
    }
    return avgLen;

    
}

// console.log(avgWordLengthCalc("q w e r t y.")); //1.00
// console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
// console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
// console.log(avgWordLengthCalc("")); // 0