// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, property) => (property in obj ? obj[property] : defaultValue)
    })
}

const position = withDefaultValue({x: 24, y: 42}, 0);
// Коли неіснуючу властивість у об'єкті викликаємо - то отримуємо стандартне значення
// console.log(position.z);

// Hidden properties
// ownKeys - властивість, яка показує, які ключі дійсно є в об'єкта
// void 0 - альтернативний запис undefined
const withHiddenProperties = (target, prefix = '_') => {
     return new Proxy(target, {
         has: (obj, property) => (property in obj) && (!property.startsWith(prefix)),
         ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
         get: (obj, property, receiver) => (property in receiver) ? obj[property]: void 0
     })
}

const data = withHiddenProperties({
    name: 'Maksym',
    age: 27,
    _id: '123'
});

// console.log('age', 'age' in data, data.age);
// console.log('_id', '_id' in data, data._id);
//
// for (let key in data) {
//     console.log(key)
// }
//
// console.log('Object.keys', Object.keys(data));

// Optimization

const IndexedArray = new Proxy(Array, {
    construct(target, [argArray], newTarget) {
        // console.log(argArray)
        const index = {};
        argArray.forEach((item) => index[item.id] = item);

        // return new target(...argArray)
        return new Proxy(new target(...argArray), {
            get(arr, property) {
                // console.log(arr, property)
                switch (property) {
                    case 'push': return item => {
                        index[item.id] = item;
                        arr[property].call(arr, item);
                    }
                    case 'findById': return id => index[id];
                    default: return arr[property]
                }
            }
        })
    }
})


const users = new IndexedArray([
    {id: 11, name: 'Maksym', age: 27},
    {id: 12, name: 'Maria', age: 27},
    {id: 13, name: 'Mike', age: 27},
    {id: 14, name: 'Andrii', age: 27},
    {id: 15, name: 'Oleg', age: 27},
]);

console.log(users[1]);

users.push({id: 16, name: 'Alex', age: 33});
console.log(users[5]);

console.log(users.findById(14));