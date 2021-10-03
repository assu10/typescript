import {IFake, makeFakeData} from "../fake";
import {zip} from "../utils";

const data = makeFakeData();
const keys = Object.keys(data), values = Object.values(data);

const fake: IFake = zip(keys, values) as IFake;

console.log(data);
console.log(fake);
/*
{
    name: 'Gerald Carter',
        email: 'mu@og.bn',
    profession: 'Fast Food Manager',
    birthday: 1965-11-04T17:29:29.370Z,
    sentence: 'Zogtuvvu zotrajni kewi ki tecros mozub wuw gi si lel azafule sah.'
}
{
    name: 'Gerald Carter',
        email: 'mu@og.bn',
    profession: 'Fast Food Manager',
    birthday: 1965-11-04T17:29:29.370Z,
    sentence: 'Zogtuvvu zotrajni kewi ki tecros mozub wuw gi si lel azafule sah.'
}
*/
