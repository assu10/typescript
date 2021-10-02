interface ISquare {
    size: number
}
interface IRectangle {
    width: number,
    height: number
}
interface ICircle {
    radius: number
}

// 위 인터페이스 타입으로 만든 객체들
const square: ISquare = {size: 10};
const ractangle: IRectangle = {width: 4, height: 5};
const circle: ICircle = {radius: 10}

// 면적 계산을 하기 위한 매개변수의 타입
type IShape = ISquare | IRectangle | ICircle;

// 면적을 계산하는 함수
const calcArea = (shape: IShape): number => {
    // shape 객체가 ISquare 인지 IRectangle 인지 알 수가 없어서 면적을 계산할 수 없음

    return 0;
}