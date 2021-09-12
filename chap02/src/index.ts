import IPerson from "./person/IPerson";
import Person, {makePerson} from "./person/Person";     // Person 은 export default, makePerson 은 export


const testMakePerson = (): void => {
    let assu: IPerson = makePerson('assu')
    let jhlee: IPerson = makePerson('jhlee')
    console.log(assu, jhlee)
}

testMakePerson()