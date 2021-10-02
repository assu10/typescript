type NumberOrString = number | string;

let ns: NumberOrString = 1;
ns = 'hello'
ns = true;  // TS2322: Type 'boolean' is not assignable to type 'NumberOrString'.