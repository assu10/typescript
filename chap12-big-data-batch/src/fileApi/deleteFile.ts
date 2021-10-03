import {fileExists} from "./fileExists";
import * as fs from "fs";
import {rmdir} from "./rmdir";

export const deleteFile = (filename: string): Promise<string> =>
    new Promise<string>(async (resolve, reject) => {
        const alreadyExists = await fileExists(filename);
        !alreadyExists ? resolve(filename) :
            fs.unlink(filename, (error: Error) => error ? reject(error) : resolve(filename));
    });

/*const deleteTest = async (filename: string) => {
    const result = await deleteFile(filename);
    console.log(`delete ${result} file.`);
}

Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
    .then(s => rmdir('./data'))
    .then(dirname => console.log(`delete ${dirname} dir`))
    .catch((e: Error) => console.log(e.message));*/
/*
delete ./data/hello.txt file.
    delete ./data/test.json file.
    delete ./data dir
*/