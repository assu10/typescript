type ICoodinates = {longitude: number}
type ILocation = {country: string, coords?: ICoodinates}
type IPerson = {name: string, location?: ILocation}

let person: IPerson = {name: 'assu'}
let longitude = person?.location?.coords?.longitude;
console.log(longitude); // undefined

if (person && person.location && person.location.coords) {
    longitude = person.location.coords.longitude
}
console.log(longitude)  // undefined