#!/usr/bin/env node
console.log(`Process ID: ${process.pid}`);
process.on('SIGHUP', () => console.log('Received: SIGHUP'));
process.on('SIGINT', () => console.log('Received: SIGINT'));
setTimeout(() => {}, 5 * 60 * 1000); // підтримка процесу в робочому стані

// В іншому терміналі ввести kill -s SIGHUP <PROCESS_ID>