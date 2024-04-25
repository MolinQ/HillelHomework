function goToPage() {
  const firstBtn = document.getElementById("firstBtn");
  const secondBtn = document.getElementById("secondBtn");
  let linkName = "";

  firstBtn.addEventListener("click", (event) => {
    if (event.target) {
      linkName = prompt("введіть посилання на сайт");
    }
  });

  secondBtn.addEventListener("click", (event) => {
    if (event.target) {
      if (linkName.startsWith("https://")) {
        window.location.href = linkName;
      } else {
        window.location.href = "https://" + linkName;
      }
    }
  });
}

goToPage();
