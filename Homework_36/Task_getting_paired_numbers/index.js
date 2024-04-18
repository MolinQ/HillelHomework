let arrayNumber = [1, 2, 3, 4, 5, 6, 8];

function getPairedNumber(num) {
  return num.filter((item) => item % 2 === 0);
}

console.log(getPairedNumber(arrayNumber));
