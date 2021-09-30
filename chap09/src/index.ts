import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const displayPersons = (prefix: string) => R.pipe(
    R.map((person: IPerson) => ({name: person.name, age: person.age})),
    R.tap(o => console.log(prefix, o))
) as any

const person: IPerson[] = R.range(1, 4+1).map(makeRandomIPerson);   // person 객체 4개가 있는 하나의 배열 생성
const nameSortedPersons = R.sortWith([
    R.descend(R.prop('name'))
])(person);

displayPersons('sorted by name: ')(nameSortedPersons);
/*
sorted by name:  [
    { name: 'Lilly McKinney', age: 51 },
    { name: 'Josie Morrison', age: 61 },
    { name: 'Flora Manning', age: 61 },
    { name: 'Fanny Griffith', age: 63 }
]
*/
