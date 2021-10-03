import * as fs from "fs";

export const readFile = (filename: string): Promise<any> =>
    new Promise<any>((resolve, reject) => {
        fs.readFile(filename, 'utf8', (e: Error, data: any) => {
            e ? reject(e) : resolve(data);
        })
    });

/*const readTest = async (filename: string) => {
    const result = await readFile(filename);
    console.log(`read ${result} from ${filename} file.`);
};

readTest('./data/hello.txt')
    .then(s => readTest('./data/test.json'))
    .catch((e: Error) => console.log(e.message));*/
/*
read hello world! from ./data/hello.txt file.
    read {
    "name": "assu",
        "age": 20
} from ./data/test.json file.
*/
