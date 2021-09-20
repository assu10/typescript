// 클래스 메서드 구문

export class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(`value: ${this.value}`)
    }
}


// 함수표현식을 담는 속성은 function 키워드 생략
export class B {
    constructor(public value: number = 1) { }
    method(): void {
        console.log(`value: ${this.value}`)
    }
}