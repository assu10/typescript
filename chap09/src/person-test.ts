import {IPerson, makeRandomIPerson} from "./model/person";

const person: IPerson = makeRandomIPerson();
console.log(person);

/*
{
    name: 'Leroy Bryan',
        age: 31,
    title: 'Occupational Therapist',
    location: {
    country: 'ST',
        city: 'Buetunu',
        address: '1556 Zemip Turnpike',
        coordinates: { latitude: -12.52604, longitude: 39.08515 }
}
}
*/
