import * as fs from "fs";

export function* readFileGenerator(filename: string): any {
    let fd: any;

    try {
        fd = fs.openSync(filename, 'rs');   // rs: 동기 모드를 사용하여 파일을 열고 읽습니다. 운영 체제가 로컬 파일 시스템 캐시를 무시하도록 지시합니다.
        const stats = fs.fstatSync(fd); // Getting information for a file or directory
        // Using methods of the Stats object
        //console.log("Path is file:", stats.isFile());
        //console.log("Path is directory:", stats.isDirectory());

        const bufferSize = Math.min(stats.size, 1024);
        const buffer = Buffer.alloc(bufferSize + 4);
        let filepos = 0;
        let line: string;

        while (filepos > -1) {
            [line, filepos] = readLine(fd, buffer, bufferSize, filepos);
            if (filepos > -1) {
                yield line;
            }
        }
        yield buffer.toString();   // yield last line (마지막 줄)
    } catch (e) {
        console.error('readline:', e);
    } finally {
        fd && fs.closeSync(fd);
    }
}

function readLine (fd: any, buffer: Buffer, bufferSize: number, position: number): [string, number] {
    let line = '';
    let readSize;
    const crSize = '\n'.length;
    //console.log('crSize: ', crSize); // 1

    while (true) {
        readSize = fs.readSync(fd, buffer, 0, bufferSize, position);
        if (readSize > 0) {
            const tmp = buffer.toString('utf8', 0, readSize);
            const index = tmp.indexOf('\n');
            if (index > -1) {
                line += tmp.substr(0, index);
                position += index + crSize;
                break;
            } else {
                line += tmp;
                position += tmp.length;
            }
        } else {
            position = -1;  // end of file
            break;
        }
    }
    return [line.trim(), position];
}