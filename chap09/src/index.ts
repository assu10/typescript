import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";
import {ILocation, makeRandomILocation} from "./model/location";
import {ICoordinates, makeRandomICoordinates} from "./model/coordinates";

const person: IPerson = makeRandomIPerson();
const location: ILocation = makeRandomILocation();
const coordinates: ICoordinates = makeRandomICoordinates();

const newLocation = R.mergeDeepRight(location, {coordinates});
const newPerson = R.mergeDeepRight(person, {location: newLocation});

console.log('person', person);
console.log('newPerson', newPerson);
/*
person {
    name: 'Mildred Hart',
        age: 21,
        title: 'Novelist',
        location: {
        country: 'TM',
            city: 'Puafjev',
            address: '1834 Hijoma Street',
            coordinates: { latitude: 43.8177, longitude: 138.68656 }
    }
}
newPerson {
    name: 'Mildred Hart',
        age: 21,
        title: 'Novelist',
        location: {
        country: 'AM',
            city: 'Fijosrid',
            address: '1230 Ekita River',
            coordinates: { latitude: 36.94358, longitude: -121.11057 }
    }
}*/
