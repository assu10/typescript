// `for...of` 구문과 `[Symbol.iterator]` 메서드 - 정상

import { RangeIterable } from "./RangeIterable";

const iterator = new RangeIterable(1, 3+1)

for (let value of iterator) {
    console.log(value)  // 1 2 3
}
