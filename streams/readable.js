const fs = require('node:fs');
const stream  = require('node:stream');


const readable = new stream.Readable({
    read(size) {
        // ...
    }
});

readable.push('dfdf');