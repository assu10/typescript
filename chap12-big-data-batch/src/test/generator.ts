import {readFile} from '../fileApi'
import * as fs from "fs";

/*function* readFileGen() {
    yield 1;
    fs.readFile('./package.json', (err: Error, data: any) => {
        yield data; // TS1163: A 'yield' expression is only allowed in a generator body.
    })
}*/


// 아래처럼 변경
async function* readFileGenerator() {
    yield 1
    const result = await readFile('./package.json')
    yield result
}
// for(let value of readFileGenerator())
//   console.log(value)