const add = async (a, b) => a + b;

// Immediately invoked function expression

(async () => {
  const res = await add(2, 3);
  console.log(`await add(2, 3) = ${res}`);
})();

// Then with callback

add(2, 3).then((res) => {
  console.log(`await add(2, 3) = ${res}`);
});

// Top level await

const res = await add(2, 3);
console.log(`await add(2, 3) = ${res}`);
