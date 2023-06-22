console.log('Start');

console.log('Start 2');

function time2Sec() {
    console.log('time2Sec');
}

setTimeout(function () {
    console.log('Inside timeout, after 2 sec')
}, 2000);

setTimeout(time2Sec, 2000);

console.log('End');

// http://latentflip.com/loupe/?