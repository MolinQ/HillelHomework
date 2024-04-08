function upperFunc() {
  let value = 0;
  return function (num) {
    value += num;
    return value;
  };
}

let result = upperFunc();

console.log(result(4));
console.log(result(6));
console.log(result(10));
console.log(result(7));
