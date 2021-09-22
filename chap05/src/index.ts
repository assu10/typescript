// 전개 연산자를 사용하여 배열 깊은 복사 하기

// 깊은 복사
const array = [1,2,3,3,4,5]
const deepCopiedArray = [...array]  // 전개 연산자 사용

deepCopiedArray[0] = 10

console.log(array, deepCopiedArray) // [ 1, 2, 3, 3, 4, 5 ] [ 10, 2, 3, 3, 4, 5 ]