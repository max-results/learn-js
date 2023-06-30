class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const ProxyPerson = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log(target, argArray)

        return new target(argArray);
    }
});

const p = new ProxyPerson('Maksym', 27);
