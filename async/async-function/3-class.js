'use strict';

const Entity = class {
  // асинхронних конструкторів немає, але можна робити так
  constructor(n) {
    return new Promise((resolve) => {
      this.n = n;
      return resolve(this);
    });
  }
  async asyncMethod() {}
  static async asyncStaticMethod() {}
};

(async () => {
  const instance = await new Entity(100);
  console.log({ instance });

  const { asyncMethod } = instance;
  console.log({ asyncMethod });
})();

const { asyncStaticMethod } = Entity;
console.log({ asyncStaticMethod });
