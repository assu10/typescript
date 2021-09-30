import * as R from 'ramda'

// 1. 3보다 같거나 큰 수만 필터링
R.pipe(
    R.filter(R.lte(3)),
    R.tap(n => console.log(n))  // [3, 4, 5,  6, 7, 8, 9, 10]
)(R.range(1, 10+1));

// 위 코드와 동일한 결과
R.pipe(
    R.filter(R.flip(R.gte)(3)),
    R.tap(n => console.log(n))  // [3, 4, 5,  6, 7, 8, 9, 10]
)(R.range(1, 10+1));


// 2. 7보다 작은 수만 필터링
R.pipe(
    R.filter(R.gt(7)),
    R.tap(n => console.log(n))  // [ 1, 2, 3, 4, 5, 6 ]
)(R.range(1, 10+1));


// 3. 3 <= x < 7 범위의 수만 필터링
R.pipe(
    R.filter(R.lte(3)),
    R.filter(R.gt(7)),
    R.tap(n => console.log(n))  // [ 3, 4, 5, 6 ]
)(R.range(1, 10+1));