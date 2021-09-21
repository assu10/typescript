// map 메서드 - number[] 타입 배열을 string[] 타입 배열로 가공

import {range} from "./range";

let names: string[] = range(1, 5+1).map((value, index) => `[${index}]: ${value}`)
console.log(names)  // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]