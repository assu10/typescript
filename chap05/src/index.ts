// 순수 함수로 가변 인수 함수 구현

import { mergeArray } from "./mergeArray";

const mergedArray1: string[] = mergeArray(
    ['hello'], ['world']
)
console.log(mergedArray1)   // [ 'hello', 'world' ]

const mergedArray2: number[] = mergeArray(
    [1], [2,3], [3,4,5]
)
console.log(mergedArray2)   // [ 1, 2, 3, 3, 4, 5 ]