## Structure
    /
    ..convert_object_to_array.js
    ..average_word_length.js
    ..maximum_possible_total.js
    ..pentagonal_number_calculator.js

### 1. **Convert Object to Array**

Create a function that converts an object into array

    toArr({ key1: 'value1', key2: 'value2' }) 
    // [["key1", "value1"], ["key2", "value2"]]
    toArray({}) // [] Return an empty array if the object is empty.

### 2. **Average Word Length**

Create an average word calculator function. The function must take in text and return the number of the average word length. **Ignore punctuation when counting the length.**

    avgWordLengthCalc("q w e r t y.") // 1.00
    avgWordLengthCalc("The reduce method executes a reducer function.") // 5.57
    avgWordLengthCalc("callback is called, accumulator!") // 6.75
    avgWordLengthCalc("") // 0

**Notice:**
You can't use:
`Array.prototype.reduce()` and `Array.prototype.map()`

### 3. **Maximum Possible Total**

Given an array of 10 numbers, return the **maximum possible total** made by summing just **5 of the 10 numbers**.

    maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) // 43
    maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])   // 100
    maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])    // 40

### 4. **Pentagonal Number calculator**

The *n*th pentagonal number P*n* is the number of distinct dots in a pattern of dots consisting of the outlines of regular pentagons with sides up to n dots, when the pentagons are overlaid so that they share one vertex.

[More on pentagonal number](https://en.wikipedia.org/wiki/Pentagonal_number)

Given *n,* return the number of distinct dots in a pattern *P*n

    pentagonalNumber(1) // 1
    pentagonalNumber(2) // 5
    pentagonalNumber(5) // 35
    pentagonalNumber(9) // 117
