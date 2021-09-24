// `yield` 키워드

function* rangeGenerator(from: number, to: number) {
    let value: number = from
    while (value < to) {
        yield value++
    }
}

// while 패턴으로 동작하는 생성기
let iterator = rangeGenerator(1, 3+1)
while (1) {
    const {value, done} = iterator.next()
    if (done) {
        break
    }
    console.log(value)  // 1 2 3
}


// for...of 패턴으로 동작하는 생성기
for (let value of iterator) {
    console.log(value) // 위에서 3이 되었으므로 아무것도 출력안됨
}