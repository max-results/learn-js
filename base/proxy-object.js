const person = {
    name: 'Maksym',
    age: 27,
    job: 'Developer'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`, target[prop]);
        return target[prop];
    },
    set(target, prop, newValue) {
        if (prop in target) {
            target[prop] = newValue;
            console.log(`Setting prop ${prop}`, newValue);
        } else {
            console.error(`No prop ${prop} in target`)
        }
    },
    has(target, prop) {
        // console.log('has', target, prop);
        return ['age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        delete  target[prop];
        console.log('Deleted...', prop, target);
        return true;
    }
})

//  get
op.age;

// set
op.age = 99;
op.gg = 100;

// has
console.log('age' in op, 'has');
console.log('name' in op, 'has');

// delete
delete op.age;

