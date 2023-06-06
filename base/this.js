function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Maksym',
    age: 27,
    sayHello: hello,
    sayHelloGlobal: hello.bind(global),
    sayHelloThis: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const olena = {
    name: 'Olena',
    age: 23
}

// console.log(person)
// console.log(this)
// person.sayHello()
// person.sayHelloGlobal()
// person.sayHelloThis();
// person.logInfo();

// person.logInfo.bind(olena)();
const fnLenaInfoLog = person.logInfo.bind(olena);
// fnLenaInfoLog('frontend', 380979999999);

// можна попередній вираз з bind записати так ->>

const fnLenaInfoLog1 = person.logInfo.bind(olena, 'frontend', 380979999999);
// fnLenaInfoLog1();

// можна попередній вираз з bind записати так ->>

// person.logInfo.call(olena, 'frontend', 380979999999);

// bind - повертає нову ф-ю і її ми можемо викликати, коли захочемо
// call - задає контекст і відразу викликає цю ф-ю
// apply - відрізняється від call способом передачі аргументів. А саме передаються через масив

// person.logInfo.apply(olena, ['frontend', 380979999999]);


// ========

const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
    return arr.map((i) => i* n)
}

// console.log(multBy(array, 3));

// Як зробити так, щоб у цього масиву відразу був метод для перемноження значень на n?

Array.prototype.multBy = function (n) {
    // console.log('multBy', this);
    return this.map((i) => i* n);
}

console.log(array.multBy(4));