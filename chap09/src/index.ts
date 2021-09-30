import * as R from 'ramda'

// 포인트가 있는 함수 형태
const inc = (b: number): number => R.add(1)(b);
console.log(inc);   // [Function: inc]

// 포인트가 없는 함수 형태
const inc2 = R.add(1);
console.log(inc2);  // [Function: f1]

// R.map 에 포인트가 있는 형태로 사용
R.map((n: number) => inc(n));

// R.map 에 포인트가 없는 형태로 사용
R.map(inc);
R.map(R.add(1));