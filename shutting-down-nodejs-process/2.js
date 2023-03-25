// Оскільки process являється екземпляром EventEmitter, то його можна використовувати для перехоплення помилок
process.on('uncaughtException', (error) => {
        console.error(error);
        process.exit(1);
});

throw new TypeError('invalid foo');
