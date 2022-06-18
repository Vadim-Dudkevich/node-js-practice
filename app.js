// console.log(process.env.vadim);
// console.log(process.env.vova);
// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);
// console.log(process.argv);

// require('./calculatorOOP');

// const data = require('./GoIT');
// console.log(data.vadim.drink);

// const { calc, vadim } = require('./GoIT');
// console.log(vadim);

const path = require('path');

const vadimPath = path.join(__dirname, 'files', 'vadim.txt');
console.log(vadimPath);
