// 함수 시그니처
function printMe(name: string, age: number) : void {
    console.log(`name: ${name}, age: ${age}`);
}

let printMeSignature: (a: string, b: number) => void = function (name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`);
}
printMeSignature('assu', 20);