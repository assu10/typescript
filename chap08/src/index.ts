// 부분 함수와 함수 조합

import { pipe } from "./pipe";

// 2차 고차 함수
const add2 = (x: number) => (y: number) => x + y;
const inc = add2(1);    // add2의 부분함수
console.log(inc);   // [Function (anonymous)]

const add3 = pipe(inc, add2(2));
console.log(add3(1));   // 4