// Promise.resolve

Promise.resolve(1)
    .then(value =>
        console.log(value)  // 1
    );

Promise.resolve([1, 2, 3])
    .then(value =>
        console.log(value)  // [ 1, 2, 3 ]
    );

Promise.resolve({name: 'assu', age: 20})
    .then(value =>
        console.log(value)  // { name: 'assu', age: 20 }
    );

Promise.reject(new Error('error occured...'))
    .catch ((err: Error) =>
        console.log('error:', err.message)
    );