let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const count = prompt('Сколько дроидов Вы хотите купить?');
totalPrice = pricePerDroid * count;
         
if (count === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
}else {
    credits -= totalPrice; 
    message = `Вы купили ${count} дроидов, на счету осталось ${credits} кредитов.`;
    }
alert(message);