// 제네릭 인터페이스 정의
interface IValuable<T> {
    value: T
}

// 제네릭 인터페이스를 구현하는 제네릭 클래스는 아래 constructor() 처럼 자신이 가진 타입변수 T 를 인터페이스 쪽 제네릭 타입 변수로 넘길 수 있다.
class Valuable<T> implements IValuable<T> {
    constructor(public value: T) { }
}

// 제네릭 함수는 아래처럼 자신의 타입변수 T 를 제네릭 인터페이스의 타입 변수 쪽으로 넘기는 형태로 구현
const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

// 제네릭 타입 제약 구문
const printValueT = <Q, T extends IValuable<Q>>(o: T) => console.log(o.value);

// 매개변수 타입을 어떤 방식으로 제약하느냐만 다르고 사용법은 완전히 동일함
printValue(new Valuable(1));
printValueT(new Valuable(1));

printValue({value: true});
printValueT({value: true});
