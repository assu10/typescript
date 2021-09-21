// reduce 메서드

import {range} from "./range";

let reduceSum: number = range(1, 100+1).reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum)  // 5050

// 곱하기는 0 을 곱하면 안되니까 두 번째 인수에 1을 넣어준다.
let reduceMultiply: number = range(1, 10+1).reduce((result: number, value: number) => result * value, 1)
console.log(reduceMultiply) // 3628800