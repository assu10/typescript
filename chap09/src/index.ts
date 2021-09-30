import * as R from 'ramda'

const incNumbers = R.pipe(
    R.map(R.add(1)),    // 포인트가 없는 함수
    R.tap(a => console.log('after add(1): ', a))    // after add(1):  [2, 3, 4,  5, 6, 7, 8, 9, 10]
);
const newNumbers = incNumbers(R.range(1, 9+1));