import IPerson from "./person/IPerson";
import Person, {makePerson} from "./person/Person";     // Person 은 export default, makePerson 은 export
import Chance from 'chance'
import * as R from 'ramda'

const chance = new Chance()
let persons: IPerson[] = R.range(0, 3)
    .map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)

const testMakePerson = (): void => {
    let assu: IPerson = makePerson('assu')
    let jhlee: IPerson = makePerson('jhlee')
    console.log(assu, jhlee)
}

testMakePerson()