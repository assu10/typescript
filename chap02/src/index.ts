// 익명 인터페이스
// 변수 ai 는 interface 키워드도 사용하지 않고, 인터페이스 이름도 없는 익명 인터페이스
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'assu', age: 20}

// 익명 인터페이스 활용
function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}

printMe(ai)     // assu 20