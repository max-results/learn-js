const stream  = require('node:stream');

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
    _read() {
        this._index += 1;

        if (this._index > this._max) {
            this.push(null);
        } else {
            const buf = Buffer.from(`${this._index}`, 'utf8');

            console.log(`Added: ${this._index}. Could be added? `, this.push(buf));
        }
    }
}

const counter = new Counter({ highWaterMark: 2 });

counter.on('data', chunk => {
    console.log(`Received: ${chunk.toString()}`);
});
