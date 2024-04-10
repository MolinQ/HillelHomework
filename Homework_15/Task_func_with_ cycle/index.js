function getNum() {
  for (let i = 0; i <= 10; i++) {
    number = prompt("Введіть число більше 100:");
  
      if (number === null) {
        console.log("число введене не коректно!");
        break;
      }
  
      if (isNaN(number)) {
        console.log("число введене не коректно!");
        continue;
      }
  
      if (number < 100) {
        console.log("число введене не коректно!");
        continue;
      } else break;
  }
  if (number !== null && number >= 100 && number !== isNaN) {
    console.log("Ви ввели: " + number);
  } else if (number === "") {
    console.log("Ви ввели: " + number);
  }
}

getNum()

