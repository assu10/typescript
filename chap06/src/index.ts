// Iterable<T> 와 Iterator<T> 인터페이스

import { StringIterable } from "./StringIterable";

for (let value of new StringIterable(['hello', 'world', '!'])) {
    console.log(value)  // hello world !
}