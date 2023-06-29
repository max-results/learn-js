class Animal {
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log('I am animal');
    }
}

class Cat extends Animal {
    static type = 'CAT';

    constructor(options) {
        super(options);
        this.color = options.color;
    }
    voice() {
        super.voice();
        console.log('I am cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}

const animal = new Animal({name: 'animal', age: 1, hasTail: true});

const cat = new Cat({name: 'Patron', age: 2, hasTail: true, color: 'black'});

cat.voice();

console.log('Age info', cat.ageInfo);