const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const rezult = login.length >= 4 && login.length <= 16;
  return rezult;
};
const isLoginUnique = function(allLogins, login) {
  const rezult = !allLogins.includes(login);
  return rezult;
};

const addLogin = function(allLogins, login) {
  console.log(login);
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
      console.log('Такой логин уже используется!');
    }
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
