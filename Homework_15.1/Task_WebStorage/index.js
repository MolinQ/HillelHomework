function Todos(date) {
  const { form, input, list } = date;
  const LOCAL_STORAGE_KEY = "name";
  this.init = function () {
    this.loadTodo();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const todoName = input.value.trim();
      this.saveTodo({
        id: Math.floor(Math.random() * 100),
        name: todoName,
        checkBox: false,
      });
    });
  };
  this.saveTodo = function (todoItem) {
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    form.reset();
    this.TodolistTemplate(todoItem);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(todoItems ? [...todoItems, todoItem] : [todoItem])
    );
  };

  this.TodolistTemplate = function (todoItem) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-item" data-id="${todoItem.id}">` +
        `<input type="checkbox" ${todoItem.checked ? "checked" : ""}>` +
        `<span class="todo-item__description">` +
        `${todoItem.name}` +
        `</span>` +
        `<button class="todo-item__delete">` +
        `Видалити` +
        `</button>` +
        `</li>`
    );
    const currentElement = document.querySelector(`[data-id="${todoItem.id}"]`);
    currentElement
      .querySelector(".todo-item__delete")
      .addEventListener("click", this.deleteElement);

    currentElement
      .querySelector("input[type='checkbox']")
      .addEventListener("click", this.togleCheckbox);
  };

  this.deleteElement = function () {
    const element = this.closest("li");
    const id = element.dataset.id;
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(todoItems.filter((item) => item.id !== Number(id)))
    );

    element.remove();
  };

  this.loadTodo = function () {
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (todoItems) {
      todoItems.forEach((item) => {
        this.TodolistTemplate(item);
        const currentElement = document.querySelector(`[data-id="${item.id}"]`);
        const checkbox = currentElement.querySelector("input[type='checkbox']");
        checkbox.checked = item.checkBox;
        if (item.checkBox) {
          currentElement.classList.add("todo-item--checked");
        }
      });
    }
  };

  this.togleCheckbox = function () {
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const element = this.closest("li");
    const id = element.dataset.id;

    const updatedItems = todoItems.map((item) => {
      if (item.id === Number(id)) {
        item.checkBox = this.checked;
      }
      return item;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));

    if (this.checked) {
      element.classList.add("todo-item--checked");
    } else {
      element.classList.remove("todo-item--checked");
    }
  };
}

new Todos({
  form: document.querySelector(".js--form"),
  input: document.querySelector(".js--form__input"),
  addButton: document.querySelector(".form__btn"),
  list: document.querySelector(".js--todos-wrapper"),
}).init();
