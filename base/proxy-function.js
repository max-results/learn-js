const log = text => console.log(`Log: ${text}`);

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log(target, thisArg, argArray);
        return target.apply(thisArg, argArray);
    }
});

log('new text')

fp('new ')