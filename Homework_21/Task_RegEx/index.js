const nameInput = document.querySelector(".name__input");
const messageArea = document.getElementsByTagName("textarea");
const errorMessage = document.getElementsByTagName("span");
const phoneNum = document.getElementById("tel-input");
const email = document.getElementById("email-input");
const submitButton = document.getElementById("sub-button");

function validation(regExp, spunNum, item) {
  item.addEventListener("input", () => {
    let isValid = regExp.test(item.value.trim());
    if (regExp.test(item.value.trim())) {
      errorMessage[spunNum].style.display = "none";
    } else {
      errorMessage[spunNum].style.display = "inline";
    }

    if (!isValid) {
      submitButton.setAttribute("disabled", "disabled");
    } else {
      submitButton.removeAttribute("disabled");
    }
  });
}
validation(/.+/, 0, nameInput);
validation(/.{5}$/, 1, messageArea[0]);
validation(/^[+380]{4}/, 2, phoneNum); //перевірка по завданню
// validation(/^\+380\d{9}$/, 2,phoneNum); //перевірка повністю вірного номеру (+380 + довжина номеру)
validation(/^[\w-.]+@[\w-.]+.[a-zA-Z]{2,}$/, 3, email);

(function () {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("Name:", nameInput.value);
    console.log("Message:", messageArea.value);
    console.log("Phone:", phoneNum.value);
    console.log("Email:", email.value);
  });
})();
