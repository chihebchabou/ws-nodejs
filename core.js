const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');
// console.log(__dirname);
// console.log(__filename);

// const pathObj = path.parse(__filename);
// console.log(pathObj);
// console.log(os.hostname());

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// console.log('total memory:' + totalMemory / 1e9);
// console.log('free memory:' + freeMemory / 1e9);

// Sync
// const res = fs.readFileSync(path.join(__dirname, 'test', 'text.txt'), 'utf8');
// console.log(res);

// let myData = '';

// fs.readFile(path.join(__dirname, 'test', 'text.txt'), 'utf8', (err, data) => {
//   try {
//     if (err) throw err;

//     myData = data;
//     console.log(data);
//     console.log('another task:' + myData);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  );
});

server.listen(5000, console.log('Server is running on port 5000'));
