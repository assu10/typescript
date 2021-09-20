// 고차 함수

import {NumberToNumberFunc, reAdd} from "./nested";

// 변수 fn 에 담긴 값은 NumberToNumberFunc 타입의 함수 표현식
let fn: NumberToNumberFunc = reAdd(1);

let result = fn(2);

console.log(result);    // 3
console.log(reAdd(1)(2));   // 3
console.log(reAdd(1));   // [Function: _add]