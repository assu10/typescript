// 고차 함수

const add1 = (a: number, b: number): number => a+b;     // 일반 함수
const add = (a: number): (c: number) => number => (b: number): number => a+b;     // 고차 함수

const result = add(1)(2);
//console.log(result);    // 3


// add 함수를 이해하기 쉽게 재구현
export type NumberToNumberFunc = (c: number) => number;
export const reAdd = (a: number): NumberToNumberFunc => {
    // NumberToNumberFunc 타입의 함수 반환
    const _add: NumberToNumberFunc = (b: number): number => {
        // number 타입의 값 반환
        return a+b;     // 클로저
    }
    return _add;
}