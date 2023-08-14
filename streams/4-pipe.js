'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/4-pipe.js
// https://github.com/nodejs/readable-stream/blob/main/lib/internal/streams/readable.js#L581

const fs = require('node:fs');
const stream  = require('node:stream');
const zlib = require('node:zlib');

// https://nodejs.org/api/stream.html#new-streamwritableoptions
const readable = fs.createReadStream('data.tmp');
const gzip = zlib.createGzip();
// шаблон відкритий конструктор (в даному випадку простіше наслідування)
const writable = new stream.Writable({
    write(chunk, encoding, next) {
        console.log({ size: chunk.length, encoding, next });
        //next(new Error('Error flushing data'));
        next();
    },
    // emitClose: false
});

writable.on('pipe', () => {
    console.log('writable stream piped');
});

writable.on('unpipe', () => {
    console.log('writable stream un piped');
})

writable.on('drain', () => {
    console.log('writable stream drained data');
})

writable.on('close', () => {
    console.log('writable stream closed');
})

writable.on('finish', () => {
    console.log('writable stream finished');
})

readable.pipe(gzip).pipe(writable);

readable.on('end', () => {
    console.log('Done');
});