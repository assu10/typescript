// 제네릭 방식 타입

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['one', 'two'];

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'assu'}, {name: 'jhlee', age: 20}]

const arrayLength = (array: string[]) => array.length
const arrayGenericLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayGenericLength(array) == 0

console.log(
    arrayGenericLength(numArray),   // 3
    arrayGenericLength(strArray),   // 2
    arrayGenericLength(personArray),    // 2
    isEmpty([]),    // true
    isEmpty([1])    // false
)