// TS2351: This expression is not constructable.   Type 'unknown' has no construct signatures.
//const create = <T>(type: T): T => new type();

const create = <T extends {new(): T}>(type: T): T => new type();

const create2 = <T>(type: new() => T): T => new type();

const create3 = <T>(type: {new(...args): T}, ...args):T => new type(...args);

class Point {
    constructor(public x: number, public y: number) { }
}

[
    create3(Date),  // 2021-10-01T07:57:56.458Z
    create3(Point, 0, 0)    // Point { x: 0, y: 0 }
].forEach((s) => console.log(s));