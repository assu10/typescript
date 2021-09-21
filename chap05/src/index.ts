// for...in, for...of

// 배열인 경우 for...in
let array = ['assu', 'jh', 'lee']
for (let index in array) {
    const name = array[index]
    console.log(`${index} - ${name}`)
}

// 객체인 경우 for...in
let obj = {name: 'assu', age: 20}
for (let prop in obj) {
    console.log(`${prop} ${obj[prop]}`)     // tsconfig.json 의 stric 이 false 이어야 함
}

// 배열인 경우 for...of
for (let name of array) {
    console.log(name)
}
