const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const answer = prompt('Введите пароль');

if (answer === null) {
  message = 'Отменено пользователем!';
} else if (answer === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else if (answer !== 'jqueryismyjam') {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
