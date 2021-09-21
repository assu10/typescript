// 타입 수정자 readonly

function pure(array: readonly number[]) {
    array.push(1)  // TS2339: Property 'push' does not exist on type 'readonly number[]'.
}