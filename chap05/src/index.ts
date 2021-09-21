// map 메서드 - 제곱 구하기

import {range} from "./range";

let squared: number[] = range(1, 5+1).map((value: number) => value * value)
console.log(squared)    // [ 1, 4, 9, 16, 25 ]