//import { range } from "ramda";
import * as R from 'ramda'

const numbers: number[] = R.range(1, 9+1);
R.pipe(
    R.tap(n => console.log(n))  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
)(numbers);

//R.tap(n => console.log(n))(numbers);    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]