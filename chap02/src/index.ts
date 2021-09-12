import {IPerson, makePerson} from "./person/Person";

const testMakePerson = (): void => {
    let assu: IPerson = makePerson('assu')
    let jhlee: IPerson = makePerson('jhlee')
    console.log(assu, jhlee)
}

testMakePerson()