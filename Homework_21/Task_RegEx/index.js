const nameInput = document.querySelector(".name__input");
const messageArea = document.getElementsByTagName("textarea");
const errorMessage = document.getElementsByTagName("span");
const phoneNum = document.getElementById("tel-input");
const email = document.getElementById("email-input");
const submitButton = document.getElementById("sub-button");

function validation(regExp, spunNum, item) {
  item.addEventListener("input", () => {
    if (regExp.test(item.value.trim())) {
      errorMessage[spunNum].style.display = "none";
    } else {
      errorMessage[spunNum].style.display = "inline";
    }
    checkValidatio();
  });
}
validation(/.+/, 0, nameInput);
validation(/.{5}$/, 1, messageArea[0]);
validation(/^[+380]{4}/, 2, phoneNum);
validation(/^[\w-.]+@[\w-.]+.[a-zA-Z]{2,}$/, 3, email);

function checkValidatio() {
  let isValid = true;
  if (!/.+/.test(nameInput.value.trim())) {
    isValid = false;
  }
  if (!/.{5,}/.test(messageArea[0].value.trim())) {
    isValid = false;
  }
  if (!/^[+380]{4}/.test(phoneNum.value.trim())) {
    isValid = false;
  }
  if (!/^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
    isValid = false;
  }

  if (isValid) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}


  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
        console.log("Name:", nameInput.value.trim());
      console.log("Message:", messageArea[0].value.trim());
      console.log("Phone:", phoneNum.value.trim());
      console.log("Email:", email.value.trim());
  });
