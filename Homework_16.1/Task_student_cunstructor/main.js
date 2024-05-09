function Student(firstName, lastName, birthdayYear, ratingsArray) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthdayYear = birthdayYear;
  this.ratingsArray = ratingsArray;
  this.visitArray = new Array(25);
  const sumRating = this.ratingsArray.reduce(
    (acc, current) => acc + current,
    0
  );

  this.returnBirthday = function () {
    const nowYear = new Date().getFullYear();
    return `Вік студента - ${nowYear - this.birthdayYear}`;
  };

  this.getAverageRating = function () {
    if (this.ratingsArray.length > 0) {
      return `Середня оцінка студента ${sumRating / this.ratingsArray.length}`;
    }
    return 0;
  };

  this.present = function () {
    if (this.visitArray.filter((item) => item !== undefined).length < 25) {
      this.visitArray.push(true);
      this.visitArray.shift();
      return `В журнал додано відвідування студента`;
    } else {
      return `ви заповнили журнал відвідування [${this.visitArray}]`;
    }
  };

  this.absent = function () {
    if (this.visitArray.filter((item) => item !== undefined).length < 25) {
      this.visitArray.push(false);
      this.visitArray.shift();
      return `В журнал додано відвідування студента`;
    } else {
      return `ви заповнили журнал відвідування [${this.visitArray}]`;
    }
  };

  this.summary = function () {
    const averageRating = sumRating / this.ratingsArray.length;
    const averageVisit =
      this.visitArray.filter((item) => item === true).length /
      this.visitArray.filter((item) => item !== undefined).length;

    if (averageRating > 90 && averageVisit > 0.9) {
      return "Молодець!";
    } else if (
      this.visitArray.filter((item) => item !== undefined).length === 0
    ) {
      return "Данних недостатньо для оцінки успішності";
    } else if (averageRating > 90 || averageVisit > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}
// student 1
const student1 = new Student("Ivan", "Petrenko", 2002, [100, 80, 100]);
console.log(student1.returnBirthday());
console.log(student1.getAverageRating());
console.log(student1.summary());
console.log(student1.visitArray);

console.log("----------------------------------------------------------------");

// student 2
const student2 = new Student("Igor", "Taranko", 1973, [50, 70, 40, 70]);
console.log(student2.returnBirthday());
console.log(student2.getAverageRating());
for (let i = 0; i < 5; i++) {
  student2.present();
  student2.absent();
}
console.log(student2.summary());
console.log(student2.visitArray);

console.log("----------------------------------------------------------------");

// student 3
const student3 = new Student("Vlad", "JavaScript", 1973, [60, 80, 90, 70]);
console.log(student3.returnBirthday());
console.log(student3.getAverageRating());
for (let i = 0; i < 26; i++) {
  student3.present();
}
console.log(student3.summary());
console.log(student3.visitArray);
