// 반복기와 반복기 제공자

export const createRangeIterable = (from: number, to: number) => {
    let currentValue = from
    return {
        next() {
            const value = currentValue < to ? currentValue++ : undefined
            const done = value == undefined
            return {value, done}
        }
    }
}