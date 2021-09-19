// 타입 별칭
type stringNumberFunc = (p1: string, p2: number) => void;

let f: stringNumberFunc = function(a: string, b: number): void { }
let g: stringNumberFunc = function(c: string, d: number): void { }
let h: stringNumberFunc = function(e: number) : void { }    // TS2322: Type '(e: number) => void' is not assignable to type 'stringNumberFunc'.
