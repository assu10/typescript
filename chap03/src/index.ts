// 표현식문 스타일의 화살표 함수 구현

// 일반 함수
function isGreater(a: number, b:number): boolean {
    return a > b;
}

// 표현식문 스타일의 화살표 함수
const isGreater2 = (a: number, b: number): boolean => a > b;
const isGreater3 = (a: number, b: number): boolean => { return a > b }; // return 키워드를 사용하려면 중괄호로 복합 실행문을 만든 후 그 안에 사용
