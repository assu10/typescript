// 반복기 제공자의 메서드로 동작하는 생성기 구현

class IterableUsingGenerator<T> implements Iterable<T> {
    constructor(private values: T[] = [], private currentIndex: number = 0) { }
    [Symbol.iterator] = function* () {
        while (this.currentIndex < this.values.length) {        // "noImplicitThis": false
            yield this.values[this.currentIndex++]
        }
    }
}

for (let item of new IterableUsingGenerator([1, 2, 3])) {
    console.log(item)   //  1 2 3
}

for (let item of new IterableUsingGenerator(['hello', 'world', '!'])) {
    console.log(item)   // hello world !
}