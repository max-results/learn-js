function calcValues(a, b) {
    return [
        a+b,
        undefined,
        // a-b,
        a*b,
        a/b
    ]
}

// const [sum, , mul, ...other] = calcValues(10, 2);
const [sum, sub = 'no', mul, ...other] = calcValues(10, 2);

// console.log(sum, mul, other, sub)

const person = {
    name: 'Max',
    age: 27,
    address: {
        city: 'Vinnytsia',
        country: 'Ukraine'
    }
}

const {name: firstName = 'Немає', age, car='Немає', address: {city: homeCity, country}} = person;
const {name, ...info} = person;

console.log(firstName, age, car, homeCity, country);
console.log(name, info);

function logPerson({name: firstName = '', age}) {
    console.log(firstName, age)
}
logPerson(person)