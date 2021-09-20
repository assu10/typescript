// 색인 키와 값으로 객체 만들기

const makeObj = (key: string, value: any) => ({ [key]: value })
const makeObj2 = (key: string, value: any) => ({ key: value })

console.log(makeObj('name', 'assu'))    // { name: 'assu' }
console.log(makeObj('age', 20))         // { age: 20 }

console.log(makeObj2('name', 'assu'))    // { key: 'assu' }
console.log(makeObj2('age', 20))         // { key: 20 }


// 색인 가능 타입을 사용하여 속성명만 다른 객체를 만드는 코드
type KeyValueType = {
    [key: string]: string
}

const makeObj3 = (key: string, value: string): KeyValueType => (
    { [key]: value }
)

console.log(makeObj3('name', 'assu'))       // { name: 'assu' }
console.log(makeObj3('name2', 'jhlee'))     // { name2: 'jhlee' }