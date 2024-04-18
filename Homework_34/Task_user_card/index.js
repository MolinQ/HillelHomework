const user = {
  name: "Vlad",
  age: 16,
  location: "Dnipro",

  getUserInfo: function () {
    return `Звати ${this.name}, вік ${this.age}, місто проживання ${this.location}`
  },
};

console.log(user.getUserInfo());
