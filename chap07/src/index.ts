// async 함수가 반환하는 값 의미

const asyncReturn = async() => {
    return [1, 2, 3]
};

asyncReturn()
    .then(value => console.log(value)); // [ 1, 2, 3 ]