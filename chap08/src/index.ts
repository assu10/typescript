// compose 함수

import { compose } from "./compose";
import { f, g, h } from "./fgh"

const composedFGH = compose(h, g, f);
console.log(composedFGH('x'));  // h(g(f(x)))


const inc = (x: number) => x + 1;

const composedInc = compose(inc, inc, inc);
console.log(composedInc(1));    // 4