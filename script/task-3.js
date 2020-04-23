const findLongestWord = function(string) {
  const arr = string.split(' ');
  let lngthString = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (lngthString < arr[i].length) {
      lngthString = arr[i].length;
      j = i;
    }
  }
  return arr[j];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
