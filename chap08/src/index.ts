// 포인트가 없는 함수 - reduce

import {pipe} from "./pipe";

const map = (f: any) => (a: any) => a.map(f);
const square = (value: any) => value * value;
const squareMap = map(square);


const reduce = (f: any, initValue: any) => (a: any) => a.reduce(f, initValue);
// const reduce2 = <T>(f: (sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue);

const sum = (result: number, value: number) => result + value;
const sumArray = reduce(sum, 0);

const pitagoras = pipe(squareMap, sumArray, Math.sqrt);

console.log(pitagoras([3,4]));  // 5 (3*3 + 4*4 의 제곱근)