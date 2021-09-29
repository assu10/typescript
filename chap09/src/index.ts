//import { range } from "ramda";
import * as R from 'ramda'

// dump 는 포인트가 없는 함수의 전형적인 모습
const dump = R.pipe(
    R.tap(n => console.log(n))
);

dump(R.range(1, 9+1))   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// TS2322: Type 'unknown' is not assignable to type 'T[]'.
/*
const dump2 = <T>(array: T[]): T[] => R.pipe(
    R.tap(n => console.log(n))
)(array)
*/

// 타입 단언 사용
const dump2 = <T>(array: T[]): T[] => R.pipe(
    R.tap(n => console.log(n))
)(array) as T[];

dump2(R.range(1, 9+1))   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]