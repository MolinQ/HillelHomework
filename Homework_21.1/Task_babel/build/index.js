"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Todos(date) {
  var form = date.form,
    input = date.input,
    list = date.list;
  var LOCAL_STORAGE_KEY = "name";
  this.init = function () {
    var _this = this;
    this.loadTodo();
    $(form).on("submit", function (event) {
      event.preventDefault();
      var todoName = $(input).val().trim();
      _this.saveTodo({
        id: Math.floor(Math.random() * 100),
        name: todoName,
        checkBox: false
      });
    });
  };
  this.saveTodo = function (todoItem) {
    var todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    $(form)[0].reset();
    this.TodolistTemplate(todoItem);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([].concat(_toConsumableArray(todoItems), [todoItem])));
  };
  this.TodolistTemplate = function (todoItem) {
    $(list).append("<li class=\"todo-item\" data-id=\"".concat(todoItem.id, "\">") + "<input class='checkboxStatus' type=\"checkbox\" ".concat(todoItem.checked ? "checked" : "", ">") + "<span class=\"todo-item__description\">" + "".concat(todoItem.name) + "</span>" + "<button class=\"todo-item__delete\">" + "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438" + "</button>" + "<button class=\"todo-item__showModal\">" + "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F" + "</button>" + "</li>");
    var currentElement = $("[data-id=\"".concat(todoItem.id, "\"]"));
    var currentname = $(currentElement).children('span').text();
    currentElement.find(".todo-item__delete").on("click", this.deleteElement.bind(this));
    currentElement.find("input[type='checkbox']").on("click", this.toggleCheckbox.bind(this));
    currentElement.find(".todo-item__showModal").on("click", this.showModal.bind(this, todoItem.name));
    this.hideModal();
  };
  this.deleteElement = function (event) {
    var element = $(event.target).closest("li");
    var id = element.data("id");
    var todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems.filter(function (item) {
      return item.id !== Number(id);
    })));
    element.remove();
  };
  this.loadTodo = function () {
    var _this2 = this;
    var todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (todoItems) {
      todoItems.forEach(function (item) {
        _this2.TodolistTemplate(item);
        var currentElement = $("[data-id=\"".concat(item.id, "\"]"));
        var checkbox = currentElement.find("input[type='checkbox']");
        checkbox.prop("checked", item.checkBox);
        if (item.checkBox) {
          currentElement.addClass("todo-item--checked");
        }
      });
    }
  };
  this.toggleCheckbox = function (event) {
    var todoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    var element = $(event.target).closest("li");
    var id = element.data("id");
    var isChecked = $(event.target).prop("checked");
    var updatedItems = todoItems.map(function (item) {
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
    $('.modal-content-text').text(name);
    $('.modal').css('display', 'block');
  };
  this.hideModal = function () {
    $('.btn-secondary').click(function () {
      $('.modal').css('display', 'none');
    });
  };
}
$(function () {
  new Todos({
    form: $(".js--form"),
    input: $(".js--form__input"),
    addButton: $(".form__btn"),
    list: $(".js--todos-wrapper")
  }).init();
});