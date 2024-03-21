

function userPortrait() {
    let birthday = prompt('Введіть рік народження');
    let city = prompt('У якому місті ви живете?');
    let kindOfSport = prompt('Введіть улюблений вид спорту!');
    let messageForCity;
    let messageForSport;

    switch (city) {
        case "Київ":
        case "Вашингтон":
        case "Лондон":
            messageForCity = `Ты живеш у столиці ${city}`
            break;

        default:
            messageForCity = `Ты живеш у місті ${city}`
            break;
    }

    switch (kindOfSport) {
        case "Футбол":
            messageForSport = 'Круто! Хочеш стати як Мессі?';
            break
        case "Баскетбол":
            messageForSport = 'Круто! Хочеш стати як Леброн?';
            break
        case "Бокс":
            messageForSport = 'Круто! Хочеш стати як брати Клички?';
            break;
        default:
            messageForSport = `Твій вид спорту - це ${kindOfSport}`;
            break;
    }

    if (!birthday || !city || !kindOfSport) {
        const missingInfo = [];
        if (!birthday) missingInfo.push('вік');
        if (!city) missingInfo.push('місто');
        if (!kindOfSport) missingInfo.push('вид спорту');
        alert(`Шкода, що Ви не захотіли ввести ${missingInfo}`);
      } else {
          alert(`Ваш вік: ${new Date().getFullYear() - birthday},${messageForCity},${messageForSport}`);
      }


}

userPortrait();