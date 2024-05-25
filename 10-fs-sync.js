// two flavors

const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/result-sync2.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
);
console.log('done with task');
console.log('starting the next one');

// or
// const fs = require('fs');
// const first = fs.readFileSync('./content/first.txt','utf8');
// const second = fs.readFileSync('./content/second.txt','utf8');

// const write =() => {
//     fs.writeFileSync(
//     './content/result-sync3.txt',
//     `Here is the result: ${first}, ${second}`
//     );
// };
// write();


console.log(first, second);