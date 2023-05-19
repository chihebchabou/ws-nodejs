// ESM
// export const url = 'http://mylogger.io/log';
const url = 'http://mylogger.io/log';

function log(message) {
  console.log(message);
}

// ESM
// export default log;

// CommonJS
module.exports.log = log;
module.exports.url = url;
// console.log(module);
