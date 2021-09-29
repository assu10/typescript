// 포인트가 없는 함수 - map

import { pipe } from "./pipe";

const map = (f: any) => (a: any) => a.map(f);
//const map2 = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f)

const square = (value: any) => value * value;
const squareMap = map(square);  // 아래처럼 굳이 a 를 지정하지 않아도 된다
//const squareMap2 = a => map(square);

const fourSquare = pipe(squareMap, squareMap);

console.log(fourSquare([3, 4]));    // [81, 256]