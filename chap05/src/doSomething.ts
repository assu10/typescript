// 튜플 - 타입 별칭 사용

import { ResultType } from "./ResultType";

// 예외 발생 시 구체적인 내용을 튜플로 반환
export const doSomething = (): ResultType => {
    try {
        throw new Error('Error occurs...')
    } catch (e) {
        if (e instanceof Error) {
            return [false, e.message]
        } else {
            return [false, 'unknown error']
        }
    }
}