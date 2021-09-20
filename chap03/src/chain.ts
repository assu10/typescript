// 메서드 체인

export class Calc {
    constructor(public value: number = 0) { }
    add(value: number) {
        this.value += value
        return this
    }
    multiple(value: number) {
        this.value *= value
        return this
    }
}