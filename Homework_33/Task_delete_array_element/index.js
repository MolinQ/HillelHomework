const array = prompt("Введіть числа")
  .trim()
  .replace(/ /g, ",")
  .split(",");
const deleteItem = prompt("Введіть числа які треба видалити")
  .trim()
  .replace(/ /g, ",")
  .split(",");

function deleteNumber(array, item) {
  for (let i = 0; i < array.length; i++) {
    while (array.includes(item[i])) {
      array.splice(array.indexOf(item[i]), 1);
    }
  }
  return array;
}

const result = deleteNumber(array, deleteItem);

console.log(result);
