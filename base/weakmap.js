let obj = {name: 'weakmap'};
// const a = [obj];
// obj = null;
// console.log(obj, a[0])

// У WeakMap ключами можуть бути тільки об'єкти
// поля size немає, так як його просто неможливо вирахувати

const map = new WeakMap([[obj, 'obj data']]);

// console.log(map.get(obj), map.has(obj));
// obj = null;
// console.log(map.get(obj), map.has(obj));


const cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user)
}

let max = {name: 'Maksym'};
let maria = {name: 'Maria'};

cacheUser(max);
cacheUser(maria);

maria = null;

console.log(cache.has(maria), cache.has(max));