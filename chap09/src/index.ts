import * as R from 'ramda'

const repeat = (n, cb) => R.range(1, n+1).map(n => cb);

const callAndAppend = R.pipe(
    R.ap(repeat(3, R.identity)),
    R.tap(a => console.log(a))
);

const input = [1,2,3];
const result = callAndAppend(input);    // [1, 2, 3, 1, 2, 3, 1, 2, 3]
