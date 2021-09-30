import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

const keys: string[] = R.keys(makeRandomIPerson());
console.log('keys', keys);  // keys [ 'name', 'age', 'title', 'location' ]

const values: any[] = R.values(makeRandomIPerson());
console.log('values', values);
/*
values [
    'Eliza Riley',
        58,
        'Traffic Manager',
        {
            country: 'CL',
            city: 'Pubuceb',
            address: '1563 Nule Turnpike',
            coordinates: { latitude: -64.73081, longitude: 8.88806 }
        }
    ]
*/
