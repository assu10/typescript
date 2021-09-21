// 제네릭 방식 타입 추론

let fn = <T>(n: T): T => n

console.log(
    fn<boolean>(true),  // true
    fn(true)        // true
)