import * as R from 'ramda'

const left: object = {name: 'assu'};
const right: object = {name: 'jhlee', age: 20}

const merge: object = R.mergeLeft(left, right);

console.log(merge); // { name: 'assu', age: 20 }