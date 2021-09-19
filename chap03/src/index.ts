// 익명 함수

let funcExpression = (function(a: number, b: number): number {
    return a+b;
})(1, 2);

let funcExpression2 =
(function(a: number, b: number): number {
    return a+b;
})
(1, 2);     // 곧바로 함수 호출 연산자를 만나므로 eager evaluation 을 적용해 3이라는 값을 만들어냄

console.log(funcExpression);    // 3

let funcExpression3 = (function(): void {
    console.log('hello');
})();   // hello
console.log(funcExpression3);   // undefined