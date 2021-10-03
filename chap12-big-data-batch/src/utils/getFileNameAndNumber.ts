export type FileNameAndNumber = [string, number];

export const getFileNameAndNumber = (defaultFilename: string, defaultNumberOfFakeData: number): FileNameAndNumber => {
    const [bin, node, filename, numberOfFakeData] = process.argv;
    return [filename || defaultFilename, numberOfFakeData ? parseInt(numberOfFakeData, 10) : defaultNumberOfFakeData];
};

const [filename, numberOfFakeItems] = getFileNameAndNumber('data/fake.csv', 500000);
console.log(filename, numberOfFakeItems);