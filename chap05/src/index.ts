// 배열의 비구조화

let array = [1,2,3,4,5]
let [first, second, third, ...rest] = array
console.log(first, second, third, rest)     // 1 2 3 [ 4, 5 ]