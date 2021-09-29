// 고차 함수

// 고차 함수의 시그니처
type FirstOrderFunc<T, R> = (p1: T) => R
type SecondOrderFunc<T, R> = (p1: T) => FirstOrderFunc<T, R>
type ThirdOrderFunc<T, R> = (p1: T) => SecondOrderFunc<T, R>

// number 타입의 값을 반환하므로 1차 함수
const add1: FirstOrderFunc<number, number> = (x: number): number => x + 1;
//console.log(add1(1));    // 2

// FirstOrderFunc<number, number> 을 반환하므로 2차 고차 함수
const add2: SecondOrderFunc<number, number> =
    (x: number): FirstOrderFunc<number, number> =>
    (y: number): number => x + y;
//console.log(add2(1)(2));     // 3

// SecondOrderFunc<number, number> 을 반환하므로 3차 고차 함수
const add3: ThirdOrderFunc<number, number> =
    (x: number): SecondOrderFunc<number, number> =>
        (y: number): FirstOrderFunc<number, number> =>
            (z: number): number => x + y + z;
//console.log(add3(1)(2)(3)); // 6


// 부분 적용 함수
const add2_1: FirstOrderFunc<number, number> = add2(1);
console.log(
    add2_1(2),      // 3
    add2(1)(2)  // 3
);

const add3_1: SecondOrderFunc<number, number> = add3(1);
const add2_2: FirstOrderFunc<number, number> = add3_1(2);
console.log(
    add2_2(3),              // 6
    add3_1(2)(3),       // 6
    add3(1)(2)(3)   // 6
);