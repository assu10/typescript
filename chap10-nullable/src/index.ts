import {IFunctor} from "./option/IFunctor";
import {IValuable} from "./option/IValuable";
import {Option} from './option/Option'

const parseNumber = (n: string): IFunctor<number> & IValuable<number> => {
    const value = parseInt(n);
    return isNaN(value) ? Option.None : Option.Some(value);
}

let value = parseNumber('1')
        .map(value => value + 1)    // 2
        .map(value => value * 2)    // 4
        .getOrElse(0)
console.log(value);         // 4

value = parseNumber('hello')
    .map(value => value + 1)    // 콜백 함수 호출안됨
    .map(value => value * 2)    // 콜백 함수 호출안됨
    .getOrElse(0)
console.log(value);         // 0