import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

// R.prop
const person: IPerson = makeRandomIPerson();

const name = R.pipe(
    R.prop('name'),
    R.tap(name => console.log(name))    // Brian Turner
)(person);


// R.assoc
const person2: IPerson = makeRandomIPerson();
const getName = R.pipe(
    R.prop('name'),
    R.tap(name => console.log(name))
);
const originalName = getName(person2);

const modifiedPerson = R.assoc('name', 'assu')(person2);
const modifiedName = getName(modifiedPerson);