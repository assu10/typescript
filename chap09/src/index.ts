import * as R from 'ramda'

const subtract = a => b => a - b;
const subtractFrom10 = subtract(10);
console.log(subtractFrom10);    // [Function (anonymous)]

const newArray = R.pipe(
    R.map(subtractFrom10),      // (10 - value)
    R.tap(a => console.log(a))  // [9, 8, 7, 6, 5, 4, 3, 2, 1]

)(R.range(1, 9+1));


const reverseSubtract = R.flip(R.subtract);
const reverseArray = R.pipe(
    R.map(reverseSubtract(10)),      // (value - 10)
    R.tap(a => console.log(a))  // [ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]


)(R.range(1, 9+1));