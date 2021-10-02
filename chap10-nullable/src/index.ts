interface IPerson {
    name: string,
    age?: number
}

let person: IPerson;
//console.log(person.name); // TS2454: Variable 'person' is used before being assigned.
console.log(person?.name);