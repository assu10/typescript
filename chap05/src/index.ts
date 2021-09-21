// split, join

console.log('hello'.split(''))          // [ 'h', 'e', 'l', 'l', 'o' ]
console.log('h_e_l_l_o'.split('_'))     // [ 'h', 'e', 'l', 'l', 'o' ]

console.log([ 'h', 'e', 'l', 'l', 'o' ].join())     // h,e,l,l,o
console.log([ 'h', 'e', 'l', 'l', 'o' ].join(''))   // hello
console.log([ 'h', 'e', 'l', 'l', 'o' ].join('_'))  // h_e_l_l_o