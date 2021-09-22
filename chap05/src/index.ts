// 순수 함수로 sort 메서드로 구현

const pureSort = <T>(array: readonly T[]): T[] => {
    let deepCopied = [...array]
    return deepCopied.sort()
}

const beforeArray: number[] = [1,5,4,3]
const afterArray = pureSort(beforeArray)

console.log(beforeArray, afterArray)    // [ 1, 5, 4, 3 ] [ 1, 3, 4, 5 ]