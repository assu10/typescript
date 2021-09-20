// 콜백 함수

// 함수 f 는 callback 이라는 매개변수가 있는데 함수 몸통에서 함수로서 호출함
export const f = (callback: () => void): void => callback();
// const arrow2 = (a: number, b: number): number => a+b

export const init = (callback: () => void): void => {
    console.log('default init finished.');
    callback();
    console.log('all init finished.');
}