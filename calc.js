// sum
// sub
// mult
// div
// console.log(process.argv);
const [operator, ...args] = process.argv.slice(2);
// console.log(operator);
const numbers = args.map((num) => {
  // return Number(num);
  return parseFloat(num, 2);
});
// console.log(numbers);
if (operator === 'sum') {
  const result = numbers.reduce((acc, num) => {
    return acc + num;
  });
  console.log(result);
}
if (operator === 'sub') {
  const result = numbers.reduce((acc, num) => {
    return acc - num;
  });
  console.log(result);
}

if (operator === 'mult') {
  const result = numbers.reduce((acc, num) => {
    return acc * num;
  });
  console.log(result);
}

if (operator === 'div') {
  const result = numbers.reduce((acc, num) => {
    return acc / num;
  });
  console.log(result);
}
