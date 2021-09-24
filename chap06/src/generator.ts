// 생성기 (generator)

export function* generator() {
    console.log('generator start..')

    let value: number = 1
    while(value < 4) {      // yield 문을 3회 반복 호출
        yield value++
    }

    console.log('generator end..')
}