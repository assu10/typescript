// filter 메서드 - 배열 반으로 나누기

import {range} from "./range";

const array: number[] = range(1, 10+1)
const half = array.length / 2

let belowHalf: number[] = array.filter((value, index) => index < half)
let overHalf: number[] = array.filter((value, index) => index >= half)

console.log(belowHalf, overHalf)    // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]