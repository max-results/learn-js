'use strict';


// актуально коли читається із стріма швидше ніж пишеться
// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/8-muptipipe.js

const fs = require('node:fs');
const stream  = require('node:stream');

const text = 'Hello World!\n';
const options = { encoding: 'utf8' };
const readable = stream.Readable.from(text, options);
const writable = fs.createWriteStream('stdout.tmp');

// всередині пайпа є замикання. Де є обробника івентів, які читають із readable і передають у writable
readable.pipe(process.stdout);
readable.pipe(process.stdout);

readable.pipe(writable);