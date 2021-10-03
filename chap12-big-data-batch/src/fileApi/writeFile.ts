import * as fs from "fs";
import {mkdir} from "./mkdir";

export const writeFile = (filename: string, data: any): Promise<any> =>
    new Promise<any>((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', (error: Error) => {
            error? reject(error) : resolve(data);
        })
    });

/*
const writeTest = async (filename: string, data: any) => {
    const result = await writeFile(filename, data);
    console.log(`write ${result} to ${filename}`);
};

mkdir('./data')
    .then(s => writeTest('./data/hello.txt', 'hello world!'))
    .then(s => writeTest('./data/test.json', JSON.stringify({name: 'assu', age: 20}, null, 2)))
    .catch((e: Error) => console.log(e.message));
*/

/*
write hello world! to ./data/hello.txt
write {
    "name": "assu",
        "age": 20
} to ./data/test.json
*/
