import {IValuable} from "./IValuable";
import {IFunctor} from "./IFunctor";

export class Some<T> implements IValuable<T>, IFunctor<T> {
    constructor(private value: T) { }
    // 클래스의 value 속성이 private 이므로 항상 getOrElse() 를 통해 value 를 얻어야 함
    getOrElse(defaultValue: T) {
        return this.value ?? defaultValue;
    }
    // 클래스의 value 속성이 private 이므로 value 값을 변경하려면 항상 map 메서드 사용
    // map<U>(fn: (value: T) => U) {    // 아래와 같은 의미
    map<U>(fn: (T) => U) {
        return new Some<U>(fn(this.value));
    }
}