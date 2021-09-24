// `for...of` 구문과 `[Symbol.iterator]` 메서드 - 오류

import { createRangeIterable } from "./createRangeIterable";

const iterator = createRangeIterable(1, 3+1)    // 반복기는 현재 동작하지 않음

for (let value of iterator) {   // TS2488: Type '{ next(): { value: number | undefined; done: boolean; }; }' must have a '[Symbol.iterator]()' method that returns an iterator.
    console.log(value)
}