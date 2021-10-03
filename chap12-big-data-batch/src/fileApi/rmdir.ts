import rimraf from "rimraf";
import {fileExists} from "./fileExists";

export const rmdir = (dirname: string): Promise<string> =>
    new Promise<string>(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname);
        !alreadyExists ? resolve(dirname) :
            rimraf(dirname, error => error ? reject(error) : resolve(dirname));
    });

/*
const deleteDataDir = async (dir) => {
    const result = await rmdir(dir);
    console.log(`${result} dir deleted.`);  // ./data/today dir deleted.
}
deleteDataDir('./data/today');      // today 디렉터리 삭제*/
