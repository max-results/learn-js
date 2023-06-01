const person = {
    name: 'Maxim',
    age: 27,
    greet: function () {
        console.log('Greet!!');
    }
}

const person1 = new Object({
    name: 'Maxim',
    age: 27,
    greet: function () {
        console.log('Greet!!');
    }
});

// В наший person1 потрапляє прототип головного класу в js - Object.

Object.prototype.sayHello = function () {
    console.log('Say hello!!');
}

const olena = Object.create(person); // створює новий об'єкт, для якого прототипом буде person __proto__
olena.name = 'Olena';


