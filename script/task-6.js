let input;
let cncl;
let total = 0;
let numbers = [];
const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

do {
  input = prompt('Введите число:');
  cncl = input;
  if (Number.isNaN(input) === true) {
    alert('Вы ввели не число. Попробуйте еще раз');
  } else {
    numbers.push(input);
    console.log(numbers);
  }
} while (cncl !== null);
alert(`Общая сумма чисел равна ${total}`);
