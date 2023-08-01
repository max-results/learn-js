'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/2-for-await.js

const stream  = require('node:stream');

const readable = new stream.Readable();

// Write style: readable.push(data)
// Read style: AsyncIterable

readable.push('Hello ');
// readable.emit('error', new Error('Cant generate data'));
readable.push('World!');
readable.push(null);

const main = async () => {
    //тут елементи склеїлись в один чанк. Це потік байтів і вони в ньому можуть склеюватись
    for await (const chunk of readable) {
        console.log({ chunk });
    }
};

main();