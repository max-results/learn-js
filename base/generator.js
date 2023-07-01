function* strGenerator() {
    yield 'H';
    yield 'E';
    yield 'L';
    yield 'L';
    yield 'O';
}

const str = strGenerator();
// console.log(str.next())

function* numGenerator(n = 10) {
    for (let i=0; i <=10; i++) {
        yield i;
    }
}

const num = numGenerator(8);
// console.log(num.next());

const iterator = {
    gen(n = 10) {
        let i = 0;
        return {
            next() {
                if(i<n) {return {value: ++i, done: false}}
                return {value: undefined, done: true}
            }
        }
    }
}

const customGen = iterator.gen(3);
console.log(customGen.next(), customGen.next(), customGen.next(), customGen.next())


const iterator1 = {
    [Symbol.iterator](n = 10) {
        let i = 0;
        return {
            next() {
                if(i<n) {return {value: ++i, done: false}}
                return {value: undefined, done: true}
            }
        }
    }
}

for (let i of iterator1) {
    console.log(i);
}