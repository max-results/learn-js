const stream  = require('node:stream');
const timers = require('node:timers/promises')

class Counter extends stream.Readable {
    constructor(opt) {
        super(opt);

        this._max = 1000;
        this._index = 0;
    }

    // якщо дані доступні під час виклику _read, то треба надсилати їх в чергу читання за допомогою .push()
    // _read() буде викликано знову після кожного виклику this.push(dataChunk),
    // коли потік буде готовий прийняти більше даних
    // _read() може продовжувати читати з ресурсу та надсилати дані, доки readable.push() не поверне false
    async _read() {
        this._index += 1;

        if (this._index > this._max) {
            this.push(null);
        } else {
            const buf = Buffer.from(`${this._index}`, 'utf8');

            console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
            // push повертає false, коли буфер буде заповнений.
            // true - коли НЕ заповнений і додаткові порції даних можуть надсилатись
        }
    }
}

const counter = new Counter();

// Подія 'data' - спрацьовує кожного разу, коли є нові дані для читання
counter.on('data', chunk => {
    console.log(`Data received: ${chunk.toString()}`);
});


// Подія 'readable' - спрацьовує коли є можливість прочитати дані без блокування
counter.on('readable', () => {
    // console.log(`readable`, counter.read(1)?.toString());
    let chunk;
    // Читаємо дані поки можливо без блокування
    while ((chunk = counter.read()) !== null) {
        console.log('Data received (readable event):', chunk.toString());
    }
});

//
// https://github.com/nodejs/node/blob/main/lib/internal/streams/readable.js#L548