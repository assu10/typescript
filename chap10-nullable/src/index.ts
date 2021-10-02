type ICoodinates = {longitude: number}
type ILocation = {country: string, coords?: ICoodinates}
type IPerson = {name: string, location?: ILocation}

let person: IPerson = {name: 'assu'}
let longitude = person?.location?.coords?.longitude ?? 0;
console.log(longitude);     // undefined 가 아니라 0

let n: null = null
console.log(n??0)   // null 이 아니라 0
