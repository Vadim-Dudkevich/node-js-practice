// sum
// sub
// mult
// div

const [operator, ...args] = process.argv.slice(2);

const numbers = args.map((num) => {
  return parseFloat(num, 2);
});

// function setOperation(numbers, operator) {
//   // if (operator === '+') {
//   //   result = numbers.reduce((acc, num) => {
//   //     return acc + num;
//   //   });
//   // }
//   // if (operator === '-') {
//   //   result = numbers.reduce((acc, num) => {
//   //     return acc - num;
//   //   });
//   // }
//   // if (operator === '*') {
//   //   result = numbers.reduce((acc, num) => {
//   //     return acc * num;
//   //   });
//   // }
//   // if (operator === '/') {
//   //   result = numbers.reduce((acc, num) => {
//   //     return acc / num;
//   //   });
//   // }
// }

function calculate(operator, numbersArr) {
  let result = null;

  switch (operator) {
    case 'sum':
      result = numbersArr.reduce((acc, num) => acc + num);
      break;

    case 'sub':
      result = numbersArr.reduce((acc, num) => acc - num);
      break;

    case 'mult':
      result = numbersArr.reduce((acc, num) => acc * num);
      break;

    case 'div':
      result = numbersArr.reduce((acc, num) => acc / num);
      break;

    default:
      result = 'Not found';
      break;
  }
  showResult(result);
}

function showResult(result) {
  console.log(result);
}

calculate(operator, numbers);
