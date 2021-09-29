//import { range } from "ramda";
import * as R from 'ramda'

const sum = (...numbers: number[]): number =>
    numbers.reduce((result: number, sum: number) => result + sum, 0);

const curriedSum = R.curryN(3, sum);

console.log(
    curriedSum(),               // [Function (anonymous)]
    curriedSum(1),         // [Function (anonymous)]
    curriedSum(1)(2),      // [Function (anonymous)]
    curriedSum(1)(2)(3)    // 6
)