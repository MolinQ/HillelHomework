let contactBook = {
  contact: [
    { name: "Ivan", phone: +360662102315, mail: "Ivan@gmail.com" },
    { name: "Nina", phone: +360561142525, mail: "Nina@gmail.com" },
    { name: "Taras", phone: +360966172121, mail: "Taras@gmail.com" },
  ],
  findContactByName: function (name) {
    const currentContact = this.contact.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (currentContact) {
      return currentContact;
    } else console.log(`Контакт з таким ім'ям не знайдено`);
  },
  addNewContact: function (newContact) {
    if (typeof newContact === "object" && !Array.isArray(newContact)) {
      this.contact.push(newContact);
      console.log(`контакт додано успішно`);
    } else {
      console.log("Данні введено у невірному форматі");
    }
  },
};

console.log(contactBook.findContactByName(prompt(`Введіть ім'я`)));
contactBook.addNewContact({
  name: "Olena",
  number: +380671234567,
  mail: "Olena@ukr.net",
});
console.log(contactBook);
contactBook.addNewContact([
  {
    name: "Olena",
    number: +380671234567,
    mail: "Olena@ukr.net",
  },
]);
console.log(contactBook);
