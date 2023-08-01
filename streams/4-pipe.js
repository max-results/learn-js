'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/4-pipe.js

const fs = require('node:fs');
const stream  = require('node:stream');

// https://nodejs.org/api/stream.html#new-streamwritableoptions
const readable = fs.createReadStream('data.tmp');
const writable = new stream.Writable({
    write(chunk, encoding, next) {
        console.log({ size: chunk.length, encoding, next });
        //next(new Error('Error flushing data'));
        next();
    }
});

readable.pipe(writable);

readable.on('end', () => {
    console.log('Done');
});