'use strict';

const asyncArrow = async () => {};
console.log({ asyncArrow });

const asyncExpression = async function() {};
console.log({ asyncExpression });

async function asyncDeclaration() {}
console.log({ asyncDeclaration });

const instance = {
    async asyncMethod() {}
};
console.log({ instance });

const Entity = class {
    constructor(n) {
        return new Promise((resolve) => {
            this.n = n;
            return resolve(this);
        });
    }
    async asyncMethod() {}
    static async asyncStaticMethod() {}
};

(async () => {
    const instance = await new Entity(100);
    console.log({ instance });

    const { asyncMethod } = instance;
    console.log({ asyncMethod });
})();

const { asyncStaticMethod } = Entity;
console.log({ asyncStaticMethod });