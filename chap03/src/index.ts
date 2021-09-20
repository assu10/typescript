// 클래스 메서드 구문

import {A, B} from "./A";

let a: A = new A
a.method()  // value: 1

let b: B = new B()
let b2: B = new B(3)

b.method()  // value: 1
b2.method()  // value: 3