// 비구조화 할당
import {IPerson, ICompany} from "./Interfaces"

let assu: IPerson = {name: 'assu', age: 20},
    jhlee: IPerson = {name: 'jhlee'}

let wev: ICompany = {name: 'wev', age: 10},
    hib: ICompany = {name: 'hib'}

console.log(assu)   // { name: 'assu', age: 20 }
console.log(jhlee)  // { name: 'jhlee' }

let {name, age} = assu  // 비구조화 할당
console.log(name, age)  // assu 20
