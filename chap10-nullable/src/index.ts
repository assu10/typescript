import {IFunctor} from "./option/IFunctor";
import {IValuable} from "./option/IValuable";
import {Option} from './option/Option'

const parseJeon = <T>(json: string): IValuable<T> & IFunctor<T> => {
    try {
        const value = JSON.parse(json);
        return Option.Some<T>(value);
    } catch (e) {
        return Option.None;
    }
}

const json = JSON.stringify({name: 'assu', age: 20});
let value = parseJeon(json).getOrElse({});
console.log(value);  // { name: 'assu', age: 20 }

value = parseJeon('hello~~').getOrElse({});
console.log(value); // {}