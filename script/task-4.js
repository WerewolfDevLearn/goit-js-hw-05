const formatString = function(string) {
  const arrLess = string.split('');
  if (arrLess.length >= 40) {
    let j = 0;
    for (let i = 35; i > 20; i -= 1) {
      if (arrLess[i] === ' ') {
        j = i;
        break;
      }
    }
    const arrBig = arrLess;
    arrBig.splice(j, j, ' ', '...');
    string = arrBig.join('');
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
