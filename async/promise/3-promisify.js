'use strict';

const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
    args.push((err, result) => {
        if (err) reject(err);
        else resolve(result);
    });
    fn(...args);
});

const fs = require('node:fs');

const readFile1 = promisify(fs.readFile);

readFile1('0-contract.js', 'utf8')
    .then((data) => {
        console.log(data.toString());
        return readFile1('3-promisify.js', 'utf8');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.log(err);
    });

const util = require('node:util');

const readFile2 = util.promisify(fs.readFile);

readFile2('0-contract.js', 'utf8')
    .then((data) => {
        console.log(data.toString());
        return readFile2('3-promisify.js', 'utf8');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.log(err);
    });