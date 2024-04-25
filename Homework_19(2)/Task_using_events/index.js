function getCurrentButton() {
  const container = document.getElementById("button__wrapper");

  container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      alert(event.target.textContent);
    }
  });
}
getCurrentButton()