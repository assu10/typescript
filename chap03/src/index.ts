// 객체 생성 시 값을 생략하는 타입스크립트 구문

export type Person = { name: string, age: number };

export const makePerson = (name: string, age: number = 10): Person => {
    const person = { name: name, age: age};
    return person;
}

// 객체 생성 시 값을 생략하는 타입스크립트 구문
const makePerson2 = (name: string, age: number = 10): Person => {
    const person2 = { name, age };      // const person = { name: name, age: age} 의 단축 표현
    return person2;
}