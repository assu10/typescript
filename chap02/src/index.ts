// 잔여 연산
let address: any = {
    country: 'Korea',
    city: 'seoul',
    address1: 'Jam-sil',
    address2: '311-10'
}
const {country, city, ...detail} = address
console.log(country)    // Korea
console.log(detail)     // { address1: 'Jam-sil', address2: '311-10' }


// 전개 연산
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord)  //{ x: 0, y: 0 }

let part1 = {name: 'assu'}
let part2 = {age: 20}
let part3 = {city: 'suwon', country: 'kr'}
let part4 = {name: 'reAssu'}
let merged = {...part1, ...part2, ...part3, ...part4}

console.log(merged) // { name: 'reAssu', age: 20, city: 'suwon', country: 'kr' }