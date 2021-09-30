// R.tap 디버깅 함수로 배열 전/후 값 출력

//import { range } from "ramda";
import * as R from 'ramda'

const numbers: number[] = R.range(1, 9+1);

const incNumbers = R.pipe(
    R.tap(a => console.log('before inc:', a)),  // "strictFunctionTypes": false, 이게 아니면 TS2769: No overload matches this call.   The last overload gave the following error. 오류 발생
    R.map(R.inc),
    R.tap(a => console.log('after inc:', a))
);

const newNumbers: number[] = incNumbers(numbers);

console.log(newNumbers);

/*before inc: [1, 2, 3, 4, 5, 6, 7, 8, 9]
after inc: [2, 3, 4,  5, 6,7, 8, 9, 10]
[2, 3, 4,  5, 6, 7, 8, 9, 10]*/
