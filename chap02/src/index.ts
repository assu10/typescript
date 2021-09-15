// 인터페이스
interface IPerson {
    name: string
    age?: number
}

class Person2 implements IPerson {
    name: string
    age: number
}

class Person3 implements IPerson {
    constructor(public name: string, public age?: number) { }
}

let assu3: Person3 = new Person3('assu')
console.log(assu3)      // Person3 { name: 'assu', age: undefined }