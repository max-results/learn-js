'use strict';

// https://github.com/HowProgrammingWorks/Streams/blob/master/JavaScript/a-backpressure.js
// актуально коли читання відбувається швидше ніж запис

const fs = require('node:fs');


// highWaterMark - розмір буфера в байтах
const readable = fs.createReadStream('./data.tmp', { highWaterMark: 12345 });
const writable = fs.createWriteStream('./copy.tmp', { highWaterMark: 4321 }); // 4321, 18321

readable.on('data', (chunk) => {
    console.log(`Write: ${chunk.length} bytes`);
    const canWrite = writable.write(chunk); // якщо ще є місце в буфері після запису - то повертається true
    if (!canWrite) {
        console.log('Pause readable due to backpressure');
        readable.pause(); // з readable стріма нічого не буде читатись
    }
});

// drain - подія, коли writable стрім вкинув все кудись. У даному випадку у файл
writable.on('drain', () => {
    console.log('Event drain: resume readable');
    readable.resume();
});

readable.on('end', () => {
    writable.end();
});

writable.on('finish', () => {
    console.log('Done');
});