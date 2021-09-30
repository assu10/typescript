import * as R from 'ramda'

console.log(R.trim('\t hello \n')); // hello
console.log('\t hello \n');             //          hello

console.log(R.toUpper('Hello'));    // HELLO
console.log(R.toLower('Hello'));    // hello

const strSplit: string[] = R.split(' ')('Hello world, typescript~');
console.log(strSplit);  // [ 'Hello', 'world,', 'typescript~' ]

const strJoin: string = R.join(' ')(strSplit);
console.log(strJoin);   // Hello world, typescript~