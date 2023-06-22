console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');
//
//     const backedData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backedData.modified = true;
//         console.log('Data received', backedData);
//     }, 3000);
// }, 2000);

/// Проміси по-суті заміна колбеків

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');

        const backedData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backedData);
    }, 2000);
});

promise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 3000);
    })
}).then((data) => {
    console.log('Data received 1', data);
    data.fromPromise = true;
    return data; // не обов'язково повертати проміс
}).then((data) => {
    console.log('Data received 2', data);
}).finally(() => {
    console.log('End')
});

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};

sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));

Promise.all([
    sleep(2000), sleep(5000)
]).then(() => console.log('All promises'));

Promise.race([
    sleep(2000), sleep(5000)
]).then(() => console.log('Race promises'));
