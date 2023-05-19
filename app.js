// console.log('Hello World!');
// console.log(globalThis);
// setInterval(() => {
//   console.log('Bonjour');
// }, 1000);

// ESM
// import log from './logger.js';

// CommonJS
const logger = require('./logger');

logger.log('bonjour');
console.log(logger);
