interface ISquare {
    tag: 'square',
    size: number
}

interface IRectangle {
    tag: 'rectangle',
    width: number,
    height: number
}
interface ICircle {
    tag: 'circle',
    radius: number
}

// 위 인터페이스 타입으로 만든 객체들
const square: ISquare = {tag: 'square', size: 10};
const ractangle: IRectangle = {tag: 'rectangle', width: 4, height: 5};
const circle: ICircle = {tag: 'circle', radius: 10}

// 면적 계산을 하기 위한 매개변수의 타입
type IShape = ISquare | IRectangle | ICircle;

// 면적을 계산하는 함수
const calcArea = (shape: IShape): number => {
    switch (shape.tag) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
    }
    return 0;
}

console.log(
    calcArea(square),   // 100
    calcArea(ractangle),    // 20
    calcArea(circle)    // 314.1592653589793
)