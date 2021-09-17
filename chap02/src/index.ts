// 타입 변환
let person: object = {name: 'assu', age: 20};
//person.name = 'assu2';  // TS2339: Property 'name' does not exist on type 'object'.

(<{name: string}>person).name = 'assu2';
console.log(person);    // { name: 'assu2', age: 20 }
