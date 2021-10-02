// 타입 T 와 U 객체를 결합하여 타입이 T & U 인 새로운 객체를 만드는 예시
const mergeObjects = <T, U>(a: T, b: U): T & U => ({...a, ...b});

type INameable = {name: string};
type IAgeable = {age: number};

const nameAndAge: INameable & IAgeable = mergeObjects({name: 'assu'}, {age: 20});

console.log(nameAndAge);    // { name: 'assu', age: 20 }