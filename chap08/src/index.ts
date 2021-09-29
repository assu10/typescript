// 클로저

// () => string 는 makeNames 의 리턴 타입으로 안쪽 유효 범위의 (): string 에 해당
const makeNames = (): () => string => { // 바깥쪽 유효 범위
    const names = ['assu', 'jhlee'];
    let index = 0;
    return (): string => {  //  안쪽 유효 범위
        if (index == names.length) {
            index = 0
        }
        console.log(index);
        return names[index++];
    }
}

const makeName: () => string = makeNames();
console.log(
    [1,2,3,4,7,6].map(n => makeName())
);

/*
0
1
0
1
0
1
[ 'assu', 'jhlee', 'assu', 'jhlee', 'assu', 'jhlee' ]
*/
