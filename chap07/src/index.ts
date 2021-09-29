// async/await - async 함수 특징

const test1 = async() => {
    let value = await 1;
    console.log(value)  // 1
    value = await Promise.resolve(2);
    console.log(value);
}

async function test2() {
    let value = await 'hello';
    console.log(value);
    value = await Promise.resolve('assu');
    console.log(value);
}

// async 함수를 일반 함수처럼 사용
//test1();
//test2();

/*
1
hello
2
assu
*/



// async 함수를 Promise 객체로 사용
test1()
    .then(() => test2())

/*
1
2
hello
assu
*/
