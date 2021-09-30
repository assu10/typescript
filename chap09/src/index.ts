import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const originalPerson: IPerson = makeRandomIPerson();
const keys: string[] = R.keys(originalPerson);
const values: any[] = R.values(originalPerson);

const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson;

console.log('originalPerson: ', originalPerson, 'zippedPerson: ', zippedPerson);
/*
originalPerson:  {
    name: 'Bertha Gonzalez',
        age: 64,
        title: 'Producer',
        location: {
        country: 'BQ',
            city: 'Fifcuwusu',
            address: '381 Vigfor Loop',
            coordinates: { latitude: -54.04413, longitude: 56.24533 }
    }
} zippedPerson:  {
    name: 'Bertha Gonzalez',
        age: 64,
        title: 'Producer',
        location: {
        country: 'BQ',
            city: 'Fifcuwusu',
            address: '381 Vigfor Loop',
            coordinates: { latitude: -54.04413, longitude: 56.24533 }
    }
}
*/
