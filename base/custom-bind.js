// https://medium.com/geekculture/custom-implementation-of-bind-method-in-javascript-c5db931b1cf4
const info = {
    firstName: 'Max',
    lastName: 'V'
}

const printInfo = function (city, zip, country, shortName) {
    console.log(`I am ${this.firstName} ${this.lastName} live in ${city} (${zip}), ${country} (${shortName})`);
}

const callMethod = printInfo.bind(info, 'Vinnytsia', 21000);
callMethod('Ukraine', 'UA');

Function.prototype.myBind = function (context, ...args1) {
    const fn = this;
    return function (...args2) {
        // fn.call(context, ...[...args1, ...args2]);

        fn.apply(context, [...args1, ...args2])
    }
}

const customCallMethod = printInfo.myBind(info, 'Vinnytsia', 21000);
customCallMethod('Ukraine', 'UA');

