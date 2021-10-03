import mkdirp from 'mkdirp'
import {fileExists} from "./fileExists";

// .then(resolve) 에서 아래와 같은 오류가 나면 tsconfig.json 의 "strictNullChecks": false 설정
// TS2345: Argument of type '(value: string | PromiseLike<string>) => void'
//   is not assignable to parameter of type '(value: string | undefined) => void | PromiseLike<void>'.
export const mkdir = (dirname: string): Promise<string> =>
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname);
        alreadyExists ? resolve(dirname) : mkdirp(dirname).then(resolve).catch(reject);
    });

/*
const makeDataDir = async (dirname: string) => {
    let result = await mkdir(dirname);
    console.log(`${result} dir created.`);  // /Users/mytypescript/chap12-big-data-batch/data dir created.
}

makeDataDir('./data/today');*/
