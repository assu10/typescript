import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const person: IPerson = makeRandomIPerson();
const pairs: [string, any][] = R.toPairs(person);
console.log('pairs: ', pairs);
/*
pairs:  [
  [ 'name', 'Willie James' ],
  [ 'age', 53 ],
  [ 'title', 'Technical Support Specialist' ],
  [
    'location',
    {
      country: 'IE',
      city: 'Itmitu',
      address: '1910 Maizo View',
      coordinates: [Object]
    }
  ]
]
*/

// TS2739: Type '{ [index: string]: any; }' is missing the following properties from type 'IPerson': name, age
//const person2: IPerson = R.fromPairs(pairs);  // 오류
const person3: IPerson = R.fromPairs(pairs) as IPerson;
console.log('person3', person3);
/*person3 {
    name: 'Willie James',
        age: 53,
        title: 'Technical Support Specialist',
        location: {
        country: 'IE',
            city: 'Itmitu',
            address: '1910 Maizo View',
            coordinates: { latitude: 37.34966, longitude: 169.75269 }
    }
}*/

