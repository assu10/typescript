// 순수 함수로 가변 인수 함수 구현

export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    let result: T[] = []
    for (let index=0; index<arrays.length; index++) {
        const array: T[] = arrays[index]

        // result 와 array 배열을 각각 전개(spread)하고 결합(merge)해야 T[] 타입 배열 생성 가능
        result = [...result, ...array]
    }
    return result
}