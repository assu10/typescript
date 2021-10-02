import {IValuable} from "./IValuable";
import {nullable} from "./nullable";
import {IFunctor} from "./IFunctor";

export class None implements IValuable<nullable>, IFunctor<nullable> {
    getOrElse<T>(defaultValue: T | nullable) {
        return defaultValue;
    }
    //map<U>(fn: (value: nullable) => U) {  // 아래와 같은 의미
    map<U>(fn: (T) => U) {
        return new None;
    }
}