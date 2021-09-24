// `setInterval` 함수와 생성기 비교

const period: number = 1000
let count: number = 0

console.log('start..')

const id = setInterval(() => {
    if (count >= 3) {
        clearInterval(id)
        console.log('end..')
    } else {
        console.log(++count)
    }
}, period)

/*
start..
1
2
3
end..
*/
