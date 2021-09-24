// `for...of` 구문과 `[Symbol.iterator]` 메서드

export class RangeIterable {
    // 생성자 매개변수에 public 접근 제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작
    constructor(public from: number, public to: number) { }
    [Symbol.iterator]() {
        const that = this
        let currentValue = that.from
        return {
            next() {
                const value = currentValue < that.to ? currentValue++ : undefined
                const done = value == undefined
                return {value, done}
            }
        }
    }
}