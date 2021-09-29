// 클로저 - 자유 변수

function add(x: number): (p1: number) => number {
    return function(y: number): number {
        return x + y;
    }
}

// 오류
/*
function add2(x: number): number {
    return function(y: number): number {    // TS2322: Type '(y: number) => number' is not assignable to type 'number'.
        return x + y;
    }
}*/

const add1 = add(1);
console.log(add1);  // [Function (anonymous)]

const result = add1(2);
console.log(result) // 3