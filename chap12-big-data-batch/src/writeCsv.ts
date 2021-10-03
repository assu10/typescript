import {getFileNameAndNumber} from "./utils";
import {writeCsvFormatFakeData} from "./fake";

const [filename2, numberOfFakeData2] = getFileNameAndNumber('./data/fake', 100000);
const csvFilename = `${filename2}-${numberOfFakeData2}.csv`;

writeCsvFormatFakeData(csvFilename, numberOfFakeData2)
    .then(result => console.log(result))
    .catch((e: Error) => console.log(e.message));
// write 1 items to ./data/fake-1.csv file.