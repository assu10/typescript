// 선택적 매개변수
type OptionalArgFunc = (p1: string, p2?: number) => void;

function fn(p1: string, p2?: number): void {
    console.log(`p2: ${p2}`);
}

let fn2: OptionalArgFunc = function(a: string, b?: number) : void {
    console.log(`b: ${b}`);
}

fn('assu', 2);   // p2: 2
fn('assu');          // p2: undefined
fn2('assu', 2);  // b: 2
fn2('assu');         // b: undefined
