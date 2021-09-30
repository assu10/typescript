import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const makeLens = (propName: string) => R.lens(R.prop(propName), R.assoc(propName));

const getter = (lens) => R.view(lens);
const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue);
const setterUsingFunc = (lens) => <T, R>(func: (T) => R) => R.over(lens, func);

// 활용
const nameLens = makeLens('name');
console.log('nameLens', nameLens);  // [Function (anonymous)]

const getName = getter(nameLens);
console.log('getName', getName);   // [Function: f1]

const setName = setter(nameLens);
console.log('nameLens', nameLens);  // [Function (anonymous)]

const setNameUsingFunc = setterUsingFunc(nameLens);
console.log('setNameUsingFunc', setNameUsingFunc);  // [Function (anonymous)]

const person: IPerson = makeRandomIPerson();

const name = getName(person);
console.log('name', name);  // Ina White

const newPerson = setName('assu')(person);
console.log('newPerson', newPerson);
/*
newPerson {
    name: 'assu',
        age: 64,
        title: 'Buyer',
        location: {
        country: 'NF',
            city: 'Jeicfa',
            address: '1982 Ugeka Mill',
            coordinates: { latitude: -48.87136, longitude: -164.53377 }
    }
}
*/

const anotherPerson = setNameUsingFunc(name => `Miss ${name}`)(person);
console.log('anotherPerson', anotherPerson);
/*
anotherPerson {
    name: 'Miss Lura Cole',
        age: 56,
        title: 'EEO Compliance Manager',
        location: {
        country: 'LK',
            city: 'Mutubrew',
            address: '966 Boge Grove',
            coordinates: { latitude: 29.59275, longitude: -19.68588 }
    }
}
*/

const capitalPerson = setNameUsingFunc(R.toUpper)(person);
console.log('capitalPerson', capitalPerson);
/*
capitalPerson {
    name: 'LIDA OWEN',
        age: 35,
        title: 'Manpower Planner',
        location: {
        country: 'TN',
            city: 'Ekapuvzo',
            address: '1286 Zoklah Court',
            coordinates: { latitude: 28.94433, longitude: 177.0845 }
    }
}
*/

console.log(
    name, getName(newPerson), getName(anotherPerson), getName(capitalPerson)
)
// Rose Gibson assu Miss Rose Gibson ROSE GIBSON
