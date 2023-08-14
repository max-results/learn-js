https://www.youtube.com/watch?v=Qr2b8C_p_Pc

https://nodejs.org/api/stream.html#new-streamwritableoptions


Стріми. Потоки даних - це абстракція, яка дозволяє нам чи передавати байтові потоки чи потоки об'єктів.
A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface.

Стріми імплементують наступні контракти: ReadableStream | WritableStream, EventEmitter, AsyncIterator.
Основна ідея стрімів - це економія пам'яті. Не треба тримати весь об'єкт в пам'яті, за допомогою стрімів ці дані можна частково перекачувати

There are four fundamental stream types within Node.js:
- Writable: streams to which data can be written (for example, fs.createWriteStream()).
- Readable: streams from which data can be read (for example, fs.createReadStream()).
- Duplex: streams that are both Readable and Writable (for example, net.Socket).
- Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

WebStreams
It is similar to the Node.js Streams API but emerged later and has become the "standard" API for streaming data across many JavaScript environments.
https://nodejs.org/api/webstreams.html


# Readable stream

Readable streams are an abstraction for a source from which data is consumed. (є абстракцією для джерела, з якого споживаються дані)
Examples of Readable streams:
- HTTP responses, on the client
- HTTP requests, on the server
- fs read streams
- zlib streams
- crypto streams
- TCP sockets
- child process stdout and stderr
- process.stdin

**Two reading modes**: flowing and paused (тече/призупинено).

All Readable streams begin in paused mode but can be switched to flowing mode in one of the following ways:
- Adding a 'data' event handler.
- Calling the stream.resume() method.
- Calling the stream.pipe() method to send the data to a Writable.

Three states

`readable.readableFlowing === null
readable.readableFlowing === false
readable.readableFlowing === true`

Events:
- error
- pause
- resume
- data - буде приходити кожний раз коли із стріма буде приходити якийсь chunk. На одній події читаємо один чанк.
- readable - коли від одного до к-ох чанків назбиралось всередині внутрішнього буфера. На одній події читаємо декілька чанків
- end (як правило викликається перед close)
- close - коли стрім закрився.

**readable.read()** - метод читає дані з внутрішнього буфера і повертає їх. Повертає null, якщо немає даних для читання

**readable.push()** - пише дані в стрім. Значення null - це службове значення, яке каже про те, що стрім закінчився. 

Стріми працюють з string, Buffer, Uint8Array. З objectMode можуть передаватись інші дані


# Writable stream

Writable streams are an abstraction for a destination to which data is written.
Examples of Writable streams include:
- HTTP requests, on the client
- HTTP responses, on the server
- fs write streams
- zlib streams
- crypto streams
- TCP sockets
- child process stdin
- process.stdout, process.stderr
(Some of these examples are actually Duplex streams that implement the Writable interface.)

Events:
- drain - подія, коли writable стрім вкинув все кудись (наприклад, у файл)
- error
- finish - подія генерується після виклику методу stream.end() і коли всі дані скинуті в пункт призначення.
- close - коли потік закритий. Подія вказує на те, що більше не буде жодних подій і подальших обчислень.
- pipe
- unpipe

**writable.write()** записує деякі дані в потік і викликає наданий зворотний виклик після повної обробки даних. Якщо сталася помилка, зворотний виклик буде викликано з помилкою як першим аргументом. Зворотний виклик викликається асинхронно й до появи помилки.

Метод writable.cork() - всі дані записуються в буферну в пам’яті. Буферизовані дані буде скинуто під час виклику методів stream.uncork() або stream.end().
Найкраще підходить для ситуацій, коли кілька невеликих шматків записуються у швидкій послідовності і замість того, шоб їх одразу записувати - краще їх збирати у більші фрагменти і викликати uncork


# Duplex stream

Duplex streams are streams that implement both the Readable and Writable interfaces.

Examples of Duplex streams include:
- TCP sockets
- zlib streams
- crypto streams


# Transform

Transform streams are Duplex streams where the output is in some way related to the input. Like all Duplex streams, Transform streams implement both the Readable and Writable interfaces.

Examples of Transform streams include:
- zlib streams
- crypto streams




