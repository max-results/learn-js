| Операція                        | Приклад                    |
|---------------------------------|----------------------------|
| Ручний вихід із процесу         | process.exit(1)            |
| Не перехоплена помилка          | throw new Error()          |
| Не оброблене відхилення промісу | Promise.reject()           |
| Ігнорування події 'error'       | EventEmitter#emit('error') |
| Необроблений сигнал             | $ kill <PROCESS_ID>        |

1. Ручний вихід із процесу
process.exit(code), де code від 0 до 255. 
За замовчуванням 0 і означає успішне завершення процесу.
2. Не перехоплена помилка
    throw new TypeError('invalid foo');
    ^
    
    TypeError: invalid foo
    at Object.<anonymous> (/home/maksym/playground/learn-js/shutting-down-nodejs-process/2.js:1:7)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

3. Не оброблене відхилення промісу
   Promise.reject(new Error('oh no'));
   ^
    Error: oh no
    at Object.<anonymous> (/home/maksym/playground/learn-js/shutting-down-nodejs-process/3.js:1:16)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

4. 


5. Необроблений сигнал. (Запустити і в іншому терміналі виконати команду kill -s SIGHUP <PROCESS_ID>)