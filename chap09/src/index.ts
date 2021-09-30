import * as R from 'ramda'

// x 가 min <= x < max 일 때만 통과
type NumberToBooleanFunc = (n: number) => boolean;
const selectRange = (min: number, max: number): NumberToBooleanFunc =>
    R.allPass([
        R.lte(min),
        R.gt(max)
    ]);

R.pipe(
    R.filter(selectRange(3, 6+1)),
    R.tap(n => console.log(n))
)(R.range(1, 10+1));