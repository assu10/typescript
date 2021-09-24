// `yield` 반환값

function* gen() {
    let count: number = 5
    let select: number = 0  // 처음엔 항상 0 이 출력
    while (count--) {
        select = yield `you select ${select}`   // yield 연산자의 반환값을 select 에 저장
    }
}

const random = (max: number, min: number = 0) => Math.round(Math.random() * (max-min)) + min

const iter = gen()
while (true) {
    const {value, done} = iter.next(random(10, 1))  // yield 연산자의 반환값은 반복기의 next 메서드 호출 시 매개변수에 전달하는 값
    if (done) {
        break
    }
    console.log(value)
}
/*
you select 0
you select 4
you select 8
you select 10
you select 7
*/
