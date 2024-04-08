function name(a) {
  return function (b) {
    return a * b;
  };
}

console.log(name(prompt('введіть перше число'))(prompt('введіть друге число')));
