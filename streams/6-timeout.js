'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/6-timeout.js

const fs = require('node:fs');
const streams = require('node:stream/promises');
const zlib = require('node:zlib');

const main = async () => {
    const readable = fs.createReadStream('data.tmp');
    const writable = fs.createWriteStream('data.gz');
    const gzip = zlib.createGzip();
    const options = { signal: AbortSignal.timeout(10) };
    await streams.pipeline(readable, gzip, writable, options);
    console.log('Done');
};

main();