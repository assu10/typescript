// 매개변수에 비구조화 할당문 사용

export type Person = { name: string, age: number };

// 컴파일러가 중괄호를 객체로 해석하게 하려면 객체를 소괄호 ( ) 로 감싸주어야 함
const makePerson1 = (name: string, age: number = 10): Person => ({ name, age })

// 매개변수에 비구조화 할당문 적용
const makePerson2 = ({ name, age }: Person) => ({ name, age })
const makePerson3 = ({ name, age }: Person): void =>
    console.log(`name: ${name}, age: ${age}`)

makePerson2({name: 'assu', age: 10})
makePerson3({name: 'assu', age: 20})   // name: assu, age: 20