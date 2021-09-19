// 함수 표현식

function add1(a: number, b: number): number {
    return a+b;
}

let add2 = function(a: number, b: number): number {
    return a+b;
}

console.log(add1(1, 2));
console.log(add2(1, 2));