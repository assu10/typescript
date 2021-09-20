// 매개변수 기본값 설정

export type Person = { name: string, age: number };

export const makePerson = (name: string, age: number = 10): Person => {
    const person = { name: name, age: age};
    return person;
}

console.log(makePerson('assu'));            // { name: 'assu', age: 10 }
console.log(makePerson('assu', 20));   // { name: 'assu', age: 20 }