const obj = {
    name: 'Maksym',
    age: 27,
    job: 'Backend Developer'
};

const entries = [
    ['name', 'Maksym'],
    ['age', 27],
    ['job', 'Backend Developer']
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);

// За замовчування коли робиться ітерація по мапі - то викликається метод .entries()
// for (let [key, value] of map) {
//     console.log(key, value);
// }

// for (let value of map.values()) {
//     console.log(value);
// }

// for (let key of map.keys()) {
//     console.log(key);
// }

// map.forEach((value, key, m) => {
//     console.log(value, key)
// });

// From map to array
const array1 = [...map]; // за допомогою оператора spread розвернути карту
// console.log(array1);

const array2 = Array.from(map);
// console.log(array2);

// From map to obj
const mapObj = Object.fromEntries(map.entries()); // Якщо в якості ключа мапи був об'єкт - то приведе його то стрічки
console.log(mapObj)