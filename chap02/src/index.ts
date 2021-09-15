// 클래스
class Person1 {
    name: string
    age?: number
}

let assu1: Person1 = new Person1();
assu1.name = 'assu'
assu1.age = 20;

console.log(assu1)      // Person1 { name: 'assu', age: 20 }

class Person2 {
    constructor(public name: string, public age?: number) { }
}

let assu2: Person2 = new Person2('assu2', 20)
console.log(assu2)  // Person2 { name: 'assu2', age: 20 }
