// 타입 단언
interface INameable {
    name: string
}

let obj: object = {name: 'assu'};

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1, name2);  // assu assu
