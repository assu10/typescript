// 추상 클래스
abstract class AbstractPerson {
    abstract name: string
    constructor(public age?: number) { }
}

class Person extends AbstractPerson {
    constructor(public name: string, age?: number) {
        super(age);
    }
}

let assu1: Person = new Person('assu1')
let assu2: Person = new Person('assu2', 20)

console.log(assu1)  // Person { age: undefined, name: 'assu1' }
console.log(assu2)  // Person { age: 20, name: 'assu2' }