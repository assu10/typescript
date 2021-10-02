// 특별히 자신을 상속하는 타입이 포함되어 있지 않은 일반 타입
export interface IValueProvider<T> {
    value(): T
}