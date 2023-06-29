const person = Object.create(
    {
        calculateAge() {
            console.log('calculateAge: ', new Date().getFullYear() - this.birth)
        }
    },
    {
        name: {
            value: 'Max',
            enumerable: true,
            writable: true,
            configurable: false // вказує, що можна видаляти ключ у об'єкта
        },
        birth: {
            value: 1995,
            enumerable: false, // default
            writable: false, // default
            configurable: false // default
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birth
            },
            set(v) {
                console.log('Set age', v)
            }
        }
    }
);

// value, enumerable, writable - property descriptor

person.name= 'Vlad'; // writable: true
delete  person.name;

console.log(person, 'person');


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key', key, person[key]);
    }
}

// ------
console.log('Age', person.age);
person.age = 100;

person.calculateAge();