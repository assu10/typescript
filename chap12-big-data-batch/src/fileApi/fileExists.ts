import * as fs from "fs";

export const fileExists = (filepath: string): Promise<boolean> =>
    new Promise<boolean>(resolve => fs.access(filepath, error => resolve(error ? false : true)));

const exist = async(filepath) => {
    const result = await fileExists(filepath);
    console.log(`${filepath} ${result ? 'exists': 'not exits'}`);
};

exist('./package.json');    // ./package.json exists
exist('./package'); // ./package not exits