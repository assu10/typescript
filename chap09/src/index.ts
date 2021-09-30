import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const displayPersons = (prefix: string) => R.pipe(
    R.map((person: IPerson) => ({name: person.name, age: person.age})),
    R.tap(o => console.log(prefix, o))
)

const person: IPerson[] = R.range(1, 4+1).map(makeRandomIPerson);   // person 객체 4개가 있는 하나의 배열 생성
//console.log(person);
const nameSortedPersons = R.sortBy(R.prop('name'))(person);
const ageSortedPersons = R.sortBy(R.prop('age'))(person);

displayPersons('sorted by name: ')(nameSortedPersons);
displayPersons('sorted by age: ')(ageSortedPersons);
/*
sorted by name:  [
    { name: 'Bruce Floyd', age: 21 },
    { name: 'Roger Brock', age: 21 },
    { name: 'Todd Webster', age: 32 },
    { name: 'Trevor Gardner', age: 24 }
]
sorted by age:  [
    { name: 'Roger Brock', age: 21 },
    { name: 'Bruce Floyd', age: 21 },
    { name: 'Trevor Gardner', age: 24 },
    { name: 'Todd Webster', age: 32 }
]
*/
