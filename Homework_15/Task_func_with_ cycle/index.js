function getNum() {
  for (let i = 0; i < 10; i++) {
    let number = prompt("Введіть число більше 100:");
    switch (true) {
      case number > 100:
        console.log("Останнє значення", number);
        return;
      case number <= 100:
        console.log(`Введіть число ще раз, бо число ${number} < 100`);
        continue;
      default:
        console.log("Останнє значення", number);
        return;
    }
  }
  console.log("Кількість спроб ввести число закінчилася");
}

getNum();
