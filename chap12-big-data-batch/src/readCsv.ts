import {getFileNameAndNumber} from "./utils";
import {csvFileReaderGenerator} from "./csv/csvFileReaderGenerator";

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1);

let line = 1;
for (let object of csvFileReaderGenerator(filename)) {
    console.log(`[${line++}] ${JSON.stringify(object)}`);
}
console.log('\n read completed.');

/*
[99999] {"name":"Harry Morris","email":"werfuksot@tuhho.zw","profession":"Payroll Specialist","birthday":"Fri Aug 01 1969 02:41:44 GMT+0900 (Korean Standard Time)","sentence":"Wum nipwilas witgok asa uge nopotwi korjor lic ludhocmik fasawohek owu de."}
[100000] {"name":"Myra Schultz","email":"labjal@anagawu.uy","profession":"Traffic Manager","birthday":"Fri Mar 18 1983 23:27:21 GMT+0900 (Korean Standard Time)","sentence":"Gi cubessod wagkif dakim osiwikkiw kurogtun do jihdonfi ra ibsa kowarov fahe dewwow ma kuju.labjal@anagawu.uy"}

read completed.
*/
