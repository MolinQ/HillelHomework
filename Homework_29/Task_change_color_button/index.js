const textElement = document.querySelector(".current-text");
const elementButton = document.querySelector(".button");

function changeTextColor() {
  elementButton.addEventListener("click", function () {
    textElement.classList.toggle("color");
  });
}

changeTextColor();
