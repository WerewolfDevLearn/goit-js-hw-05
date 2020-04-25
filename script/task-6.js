let input;
let cncl;
let total = 0;
const numbers = [];
do {
  input = prompt('Введите число:');
  cncl = input;
  input = Number(input);
  if (Number.isNaN(input) === true) {
    alert('Вы ввели не число. Попробуйте еще раз');
  } else if (cncl === '') {
    input = '';
    alert('Вы ничего не ввели.');
  } else {
    numbers.push(input);
  }
} while (cncl !== null);
numbers.pop();

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
  total += numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);
