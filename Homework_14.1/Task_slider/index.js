(function sliders() {
  const list = document.querySelector(".js--slider--elements");
  const prevButton = document.querySelector(".js--slider__prev");
  const nextButton = document.querySelector(".js--slider__next");

  const activeElement = list.getElementsByClassName('active')[0];
  console.log(activeElement)

  prevButton.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.getElementsByClassName(activeClassName)[0];
    const prevElement = activeElement.previousElementSibling;

    if (prevElement) {
      activeElement.classList.remove(activeClassName);
      prevElement.classList.add(activeClassName);
    }
  });

  nextButton.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.getElementsByClassName(activeClassName)[0];
    const nextElement = activeElement.nextElementSibling;
    if (nextElement) {
      activeElement.classList.remove(activeClassName);
      nextElement.classList.add(activeClassName);
    }
  });
})();
