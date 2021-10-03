import * as fs from "fs";
import {mkdir} from "./mkdir";

export const appendFile = (filename: string, data: any): Promise<any> =>
    new Promise<any>((resolve, reject) => {
        fs.appendFile(filename, data, 'utf8', (error: Error) => {
            error ? reject(error) : resolve(data)
        })
    });

/*const appendTest = async (filename: string, data: any) => {
    const result = await appendFile(filename, data);
    console.log(`append ${result} to ${filename}`);
};

mkdir('./data')
    .then(s => appendTest('./data/hello.txt', '\nhi, there'))
    .catch((e: Error) => console.log(e.message));*/
/*
append
hi, there to ./data/hello.txt
*/