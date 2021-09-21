// 깊은 복사, 얕은 복사

// 깊은 복사
let original: number = 1
let copied = original

copied += 2

console.log(original, copied)   // 1 3


// 얕은 복사
const originalArr = [1,2,3,4]
const shallowCopiedArr = originalArr

shallowCopiedArr[0] = 10
console.log(originalArr, shallowCopiedArr)  // [ 10, 2, 3, 4 ] [ 10, 2, 3, 4 ]