let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getSalary(obj) {
  let salarySum = 0;
  for (const elementOfCompany of [...Object.values(obj)]) {
    if (Array.isArray(elementOfCompany)) {
      elementOfCompany.map((elementOfDepartment) => {
        salarySum += elementOfDepartment.salary;
      });
    } else {
      salarySum += getSalary(elementOfCompany);
    }
  }
  return salarySum;
}
console.log(`сума зарплат усіх робітників ${getSalary(company)}`);
