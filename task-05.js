const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';
let country;
let credits;

let deliveryCountry = prompt(`Введите страну доставки`);

deliveryCountry = deliveryCountry.toLowerCase();

switch (deliveryCountry) {
  case CHINA: {
    country = 'Китай';
    credits = 100;
    alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
    break;
  }
  case CHILE: {
    country = 'Чили';
    credits = 250;

    alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
    break;
  }
  case AUSTRALIA: {
    country = 'Австралия';
    credits = 170;

    alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
    break;
  }

  case INDIA: {
    country = 'Индия';
    credits = 80;

    alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
    break;
  }
  case JAMAICA: {
    country = 'Ямайку';
    credits = 120;

    alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
    break;
  }
  default:
    alert(`В вашей стране доставка не доступна`);
}
