function createCalc(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalc(42);
// console.log(calc);
// calc();


function createIncrementor(n) {
    return function (num) {
        return num + n;
    }
}

const addOne = createIncrementor(1);

console.log(addOne(10));
console.log(addOne(17));

function domainGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = domainGenerator('com');
const uaUrl = domainGenerator('ua');
console.log(comUrl('google'));
console.log(uaUrl('google'));