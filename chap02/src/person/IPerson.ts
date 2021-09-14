interface IPerson {
    name: string
    age: number
    address?: string
}

let good: IPerson = {name: 'assu', age: 20}

//let bad1: IPerson = {name: 'assu'}  // age 가 없어서 오류
let bad2: IPerson = {name: 'assu', age: 20, address: 'suwon'}   // address 가 있어서 오류



