// 튜플 - 튜플에 비구조화 할당 적용

import { doSomething } from "./doSomething";

const [result, errorMsg] = doSomething()
console.log(result, errorMsg)   // false Error occurs...