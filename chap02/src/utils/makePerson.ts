export function makePerson(name: string, age:number) {
    return {name: name, age: age}
}

export function testMakePerson() {
    console.log(makePerson('Assu', 22), makePerson('jhlee', 23))
}