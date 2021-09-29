// compose 함수

import { f, g, h } from "./fgh"
import { compose } from "./compose";
import { pipe } from "./pipe";

const composedFGH = compose(h, g, f);
console.log(composedFGH('x'));  // h(g(f(x)))


const inc = (x: number) => x + 1;
const composedInc = compose(inc, inc, inc);
console.log(composedInc(1));    // 4


const pipedFGH = pipe(h, g, f);
console.log(pipedFGH('x'));     // f(g(h(x)))