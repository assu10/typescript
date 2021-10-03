import {IFake, makeFakeData} from "../fake";

const data: IFake = makeFakeData();
const keys = Object.keys(data);
console.log(keys);  // [ 'name', 'email', 'profession', 'birthday', 'sentence' ]

const values = Object.values(data);
console.log(values);
// ['Leah Ortega', 'tuglu@tuji.sj', 'Production Engineer', 1967-11-01T01:45:26.062Z,
// 'Se unuijogo kuweju cipa lazeuf samew guv jet cejzah vorol linrejvo pe ti.']
