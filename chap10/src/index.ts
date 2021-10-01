const obj = {name: 'assu', age: 20, city: 'seoul', country: 'korea'};

/*const pick = (obj, keys) => keys.map(key => ({[key]: obj[key]}))
    .reduce((result, value) => ({...result, ...value}), {});

console.log(
    pick(obj, ['name', 'age']), // { name: 'assu', age: 20 }
    pick(obj, ['nam', 'agge'])  // { nam: undefined, agge: undefined }
)*/

// TS2536: Type 'K' cannot be used to index type 'T'.
/*
const pick = <T, K>(obj: T, keys: K[]) => keys.map(key => ({[key]: obj[key]}))
.reduce((result, value) => ({...result, ...value}), {});*/

const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
    keys.map(key => ({[key]: obj[key]}))
        .reduce((result, value) => ({...result, ...value}), {});

console.log(
    pick(obj, ['name', 'age']), // { name: 'assu', age: 20 }
    pick(obj, ['nam', 'agge'])  // TS2322: Type '"agge"' is not assignable to type '"name" | "age" | "city" | "country"'.