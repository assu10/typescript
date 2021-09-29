// async 함수 예외 처리


// -----  async 예외 처리
const asyncException = async() => {
    throw new Error('error~');
};

// 프로그램이 비정상 종료됨
//asyncException();

// 프로그램이 비정상 종료되지 않음
asyncException()
    .catch(err => console.log('error:', err.message));  // error: error~


// ----- await 예외 처리
const awaitReject = async() => {
    await Promise.reject(new Error('error~~'));
};

// 프로그램이 비정상 종료됨
//awaitReject();

// 프로그램이 비정상 종료되지 않음
awaitReject()
    .catch(err => console.log('error:', err.message));  // error: error~~