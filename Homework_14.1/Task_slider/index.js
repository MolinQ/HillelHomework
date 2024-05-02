(function sliders() {
  const list = document.querySelector(".js--slider--elements");
  const dotList = document.querySelector(".js--dot__wrapper");
  const prevButton = document.querySelector(".js--slider__prev");
  const nextButton = document.querySelector(".js--slider__next");

  if (!list.querySelector(".active").previousElementSibling) {
    prevButton.style.display = "none";
  }

  prevButton.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.getElementsByClassName(activeClassName)[0];
    const activeDot = dotList.getElementsByClassName(activeClassName)[0];
    const prevDot = activeDot.previousElementSibling;
    const prevElement = activeElement.previousElementSibling;

    if (prevElement) {
      activeElement.classList.remove(activeClassName);
      prevElement.classList.add(activeClassName);

      activeDot.classList.remove(activeClassName);
      prevDot.classList.add(activeClassName);

      if (!prevElement.previousElementSibling) {
        prevButton.style.display = "none";
      }
      nextButton.style.display = "block";
    }
  });

  nextButton.addEventListener("click", function () {
    const activeClassName = "active";
    const activeElement = list.getElementsByClassName(activeClassName)[0];
    const nextElement = activeElement.nextElementSibling;
    const activeDot = dotList.getElementsByClassName(activeClassName)[0];
    const nextDot = activeDot.nextElementSibling;
    if (nextElement) {
      activeElement.classList.remove(activeClassName);
      nextElement.classList.add(activeClassName);

      activeDot.classList.remove(activeClassName);
      nextDot.classList.add(activeClassName);

      if (!nextElement.nextElementSibling) {
        nextButton.style.display = "none";
      }
      prevButton.style.display = "block";
    }
  });
})();
