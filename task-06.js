let total = 0;

while (true) {
    let input = prompt('Введи число');

    if (input === null) {
        alert('Отменено пользователем');
        break;
    }
    input = Number(input);
    total += input;
}

alert(`Общая сумма ${total}`);