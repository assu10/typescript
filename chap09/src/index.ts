//import { range } from "ramda";
import * as R from 'ramda'

console.log(
    R.add(1, 2),    // 3, 매개변수가 2개인 일반함수
    R.add(1)(2)     // 3, 2차 고차 함수
    //R.add(1, 2, 3), // TS2554: Expected 1-2 arguments, but got 3.
)