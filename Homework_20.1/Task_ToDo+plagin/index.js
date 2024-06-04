function Todos(date) {
  const { form, input, list } = date;
  const LOCAL_STORAGE_KEY = "name";

  this.init = function () {
    this.loadTodo();
    $(form).on("submit", (event) => {
      event.preventDefault();
      const todoName = $(input).val().trim();
      this.saveTodo({
        id: Math.floor(Math.random() * 100),
        name: todoName,
        checkBox: false,
      });
    });
  };

  this.saveTodo = function (todoItem) {
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    $(form)[0].reset();
    this.TodolistTemplate(todoItem);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todoItems, todoItem])
    );
  };

  this.TodolistTemplate = function (todoItem) {
    $(list).append(
      `<li class="todo-item" data-id="${todoItem.id}">` +
        `<input class='checkboxStatus' type="checkbox" ${todoItem.checked ? "checked" : ""}>` +
        `<span class="todo-item__description">` +
        `${todoItem.name}` +
        `</span>` +
        `<button class="todo-item__delete">` +
        `Видалити` +
        `</button>` +
        `<button class="todo-item__showModal">` +
        `Відкрити завдання` +
        `</button>` +
        `</li>`
    );

    const currentElement = $(`[data-id="${todoItem.id}"]`);
    const currentname = $(currentElement).children('span').text();
    currentElement
      .find(".todo-item__delete")
      .on("click", this.deleteElement.bind(this));
    currentElement
      .find("input[type='checkbox']")
      .on("click", this.toggleCheckbox.bind(this));

      currentElement
          .find(".todo-item__showModal")
          .on("click", this.showModal.bind(this, todoItem.name));

      this.hideModal();
  };

  this.deleteElement = function (event) {
    const element = $(event.target).closest("li");
    const id = element.data("id");
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
        const currentElement = $(`[data-id="${item.id}"]`);
        const checkbox = currentElement.find("input[type='checkbox']");
        checkbox.prop("checked", item.checkBox);
        if (item.checkBox) {
          currentElement.addClass("todo-item--checked");
        }
      });
    }
  };

  this.toggleCheckbox = function (event) {
    const todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const element = $(event.target).closest("li");
    const id = element.data("id");
    const isChecked = $(event.target).prop("checked");

    const updatedItems = todoItems.map((item) => {
      if (item.id === Number(id)) {
        item.checkBox = isChecked;
      }
      return item;
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));

    if (isChecked) {
      element.addClass("todo-item--checked");
    } else {
      element.removeClass("todo-item--checked");
    }
  };

  this.showModal = function (name) {

        $('.modal-content-text').text(name)
        $('.modal').css('display', 'block');

  };

  this.hideModal = function() {
    $('.btn-secondary').click(function () {
      $('.modal').css('display','none')
    })
  }
}

$(function () {
  new Todos({
    form: $(".js--form"),
    input: $(".js--form__input"),
    addButton: $(".form__btn"),
    list: $(".js--todos-wrapper"),
  }).init();
});
