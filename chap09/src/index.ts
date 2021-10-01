import * as R from 'ramda'

// 함수 T 는 value 값을 첫 번째 매개변수로 받는 2차 고차함수
const T = value => R.pipe(
    R.applyTo(value),
    R.tap(value => console.log(value))
);

// value100 은 첫 번째 매개변수에 100을 대입해서 만든 1차 함수로 R.identity 처럼 매개변수가 한 개인 콜백함수를 입력받을 수 있음
const value100 = T(100);

const sameValue = value100(R.identity);    // 100
const add1Value = value100(R.add(1));   // 101