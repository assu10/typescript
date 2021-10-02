// 메서드의 반환 타입이 this 이므로 F-바운드 타입
export interface IMultiplyable<T> {
    multiply(value: T): this
}