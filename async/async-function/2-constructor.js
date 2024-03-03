'use strict';

const AsyncFunction = (async () => {}).constructor;
console.log(AsyncFunction); // [Function: AsyncFunction]

const asyncFunctionPrototype = Object.getPrototypeOf(async () => {});
console.log(asyncFunctionPrototype); // // Function [AsyncFunction] {}
console.log(AsyncFunction.prototype === asyncFunctionPrototype); // true

const AsyncConstructor = asyncFunctionPrototype.constructor;
console.log(AsyncConstructor); // [Function: AsyncFunction]
console.log(AsyncFunction === AsyncConstructor); // true
