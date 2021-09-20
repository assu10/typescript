// 객체를 반환하는 화살표 함수

export type Person = { name: string, age: number };

// 객체 생성 시 값을 생략하는 타입스크립트 구문
const makePerson = (name: string, age: number = 10): Person => {
    const person = { name, age }      // const person = { name: name, age: age} 의 단축 표현
    return person
}

console.log(makePerson('assu'))     // { name: 'assu', age: 10 }

// 화살표 함수에서 객체를 반환하고자 할 때 아래와 같이 하면 컴파일러는 중괄호를 객체가 아닌 복합 실행문으로 해석함
const makePersonBad = (name: string, age: number = 10): Person => { name, age } // 오류

// 컴파일러가 중괄호를 객체로 해석하게 하려면 객체를 소괄호 ( ) 로 감싸주어야 함
const makePersonGood = (name: string, age: number = 10): Person => ({ name, age })