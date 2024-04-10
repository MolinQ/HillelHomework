let ladder = {
  counter: 0,
  up: function () {
    this.counter++;
    console.log(`Зараз ви на ${this.counter} сходинці`);
    return this;
  },
  down: function () {
    this.counter > 0
      ? (this.counter--, console.log(`Зараз ви на ${this.counter} сходинці`))
      : console.log("Ви на нижньому поверсі, далі нікуди спускатися");
    return this;
  },
  showStep: function () {
    console.log(`поточна сходинка №${this.counter}`);
    return this;
  },
};

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep();

ladder.up().up().down().showStep();
