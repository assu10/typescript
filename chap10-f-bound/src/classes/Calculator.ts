import {IValueProvider} from "../interfaces";

// F-바운드 타입이 아닌 일반 타입의 인터페이스인 IValueProvider<T> 구현
// _value 속성을 private 로 만들어 Calculator 를 사용하는 코드에서 _value 속성이 아닌 value() 메서드로 접근할 수 있도록 설계
export class Calculator implements IValueProvider<number> {
    constructor(private _value: number = 0) { }
    value(): number {
        return this._value;
    }
}