// yield*` 키워드

function* gen12() {
    yield 1
    yield 2
}

function* gen12345() {
    yield* gen12()
    yield* [3,4]
    yield 5
}

for (let value of gen12345()) {
    console.log(value)  // 1 2 3 4 5
}