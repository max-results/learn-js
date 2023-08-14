'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/9-slow.js

const fs = require('node:fs');
const stream  = require('node:stream');
const timers = require('node:timers/promises');

const createSlowStream = (delay) => {
    const options = {
        async transform(chunk, encoding, next) {
            for (const char of chunk.toString()) {
                this.push(char);
                await timers.setTimeout(delay);
            }
            next(); // першим аргументом можна кидати помилку
        }
    };
    return new stream.Transform(options);
};

const options = { encoding: 'utf8' };
const readable = fs.createReadStream('./9-slow.js', options);
const slow = createSlowStream(30);
readable.pipe(slow).pipe(process.stdout);