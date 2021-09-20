// 메서드 체인

import {Calc} from "./chain";

let calc = new Calc
let result = calc.add(1).add(2).multiple(3)

console.log(result)         // Calc { value: 9 }
console.log(result.value)   // 9