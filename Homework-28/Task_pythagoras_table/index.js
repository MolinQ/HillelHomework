do {
  ceilQuantity = +prompt("Введіть кількість рядків та стовпців");

  if (ceilQuantity <= 0) {
    alert("Потрібно ввести число більше за 0");
  }
} while (ceilQuantity <= 0);

const table = document.createElement("table");
const headerCeil = document.createElement("tr");
headerCeil.appendChild(document.createElement("td"));
document.body.appendChild(table);

for (let i = 1; i <= ceilQuantity; i++) {
  const cell = document.createElement("td");
  cell.textContent = i;
  headerCeil.appendChild(cell);
}
table.appendChild(headerCeil);

for (let i = 1; i <= ceilQuantity; i++) {
  const row = document.createElement("tr");
  const ceil = document.createElement("td");
  ceil.textContent = i;
  row.appendChild(ceil);

  for (let j = 1; j <= ceilQuantity; j++) {
    const ceil = document.createElement("td");
    ceil.textContent = i * j;
    row.appendChild(ceil);
  }

  table.appendChild(row);
}
