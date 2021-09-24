// 반복기와 반복기 제공자

import { createRangeIterable } from "./createRangeIterable";

const iterator = createRangeIterable(1, 3+1)    // 반복기는 현재 동작하지 않음

while(true) {
    const {value, done} = iterator.next();  // 반복기 동작
    if (done) {
        break
    }
    console.log(value)  // 1 2 3
}