"use strict";

const modal = document.querySelectorAll(".modal");
const toggleWindowBtn = document.querySelectorAll(".toggle-window");

// toggle modal window
toggleWindowBtn.forEach((btn, i) => {
  modal[0].classList.add("hideWindow");
  btn.addEventListener("click", () => {
    modal.forEach((item, j) => {
      item.classList.remove("hideWindow");
      modal[i].classList.add("hideWindow");
      inputName[i].style = "";
      inputPassword[i].style = "";
      inputEmail[i].style = "";
      item.style = "";
      document.querySelector("body").style = "";
      document.querySelector(".header").style =
        "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 0.4; margin-bottom: 2rem;";
    });
  });
});

// toggle password vision
const visionContainer = document.querySelectorAll(".vision-container");
const visionDB = {
  visible:
    '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96298 2.79787C9.88423 2.68371 7.99176 0 5.00014 0C2.43309 0 0.145628 2.6683 0.0493791 2.78205C-0.0164597 2.85955 -0.0164597 2.97329 0.0493791 3.0512C0.145628 3.16495 2.43309 5.83325 5.00014 5.83325C7.56719 5.83325 9.85466 3.16495 9.95091 3.0512C10.0113 2.97911 10.0167 2.87537 9.96298 2.79787ZM5.00014 4.58325C4.081 4.58325 3.33351 3.83576 3.33351 2.91662C3.33351 1.99747 4.081 1.24998 5.00014 1.24998C5.91929 1.24998 6.66678 1.99747 6.66678 2.91662C6.66678 3.83576 5.91929 4.58325 5.00014 4.58325Z" fill="#8A8A8A"/></svg>',
  invisible:
    '<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00014 0.833435C2.43309 0.833435 0.145628 3.50173 0.0493791 3.61548C-0.0164597 3.69298 -0.0164597 3.80673 0.0493791 3.88464C0.106878 3.95255 0.947705 4.92878 2.16019 5.70627L3.46601 4.40045C3.38101 4.20045 3.33351 3.98087 3.33351 3.75005C3.33351 2.8309 4.081 2.08342 5.00014 2.08342C5.23098 2.08342 5.45055 2.13091 5.65054 2.21591L6.72428 1.14218C6.20094 0.955093 5.62638 0.833435 5.00014 0.833435Z" fill="#8A8A8A"/><path d="M9.96301 3.63131C9.90967 3.55422 9.02512 2.30924 7.53805 1.50675L8.68928 0.355522C8.77053 0.274273 8.77053 0.142185 8.68928 0.0609366C8.60803 -0.0203122 8.47595 -0.0203122 8.3947 0.0609366L1.31149 7.14419C1.23024 7.22543 1.23024 7.35752 1.31149 7.43877C1.3519 7.47961 1.40523 7.50002 1.45857 7.50002C1.51191 7.50002 1.56523 7.47961 1.60607 7.43918L2.9123 6.13295C3.55604 6.44711 4.26603 6.66669 5.00018 6.66669C7.56723 6.66669 9.85469 3.99839 9.95094 3.88465C10.0114 3.81256 10.0168 3.70881 9.96301 3.63131ZM5.00018 5.41671C4.61559 5.41671 4.26603 5.28046 3.98353 5.06131L6.31141 2.73343C6.53057 3.01593 6.66681 3.36551 6.66681 3.75008C6.66681 4.66922 5.91932 5.41671 5.00018 5.41671Z" fill="#8A8A8A"/></svg>'
};

visionContainer.forEach(container => {
  function createVisionBtn(btnClass, DBvalue) {
    const visionBtn = document.createElement("div");
    visionBtn.classList.add(btnClass);
    visionBtn.innerHTML = DBvalue;
    container.append(visionBtn);
  }
  createVisionBtn("visible", visionDB.visible);
  createVisionBtn("invisible", visionDB.invisible);

  const visible = document.querySelectorAll(".visible");
  const invisible = document.querySelectorAll(".invisible");
  const password = document.querySelectorAll(".input-password");

  visible.forEach((item, i) => {
    item.style.display = "none";
    item.style.marginBottom = "1%";
    item.addEventListener("click", e => {
      item.style.display = "none";
      invisible[i].style.display = "block";
      password[i].type = "password";
    });
  });

  invisible.forEach((item, i) => {
    item.addEventListener("click", e => {
      item.style.display = "none";
      visible[i].style.display = "block";
      password[i].type = "text";
    });
  });
});

// Validation
const errors = {
  incorrectName: "incorrect name: please use only numbers and letters",
  incorrectPassword:
    "incorrect password: password must be at least 8 characters long"
};

const formItem = document.querySelectorAll(".reg-form");
const inputName = document.querySelectorAll(".input-name");
const inputPassword = document.querySelectorAll(".input-password");
const inputEmail = document.querySelectorAll(".input-email");

function validation(input) {
  const myRegexp = /\W/g;
  const bgColor = document.querySelector("body");
  const header = document.querySelector(".header");
  input.forEach((item, i) => {
    if (input[i].classList.contains("input-name")) {
      if (
        input[i].value === "" ||
        input[i].value.length < 4 ||
        input[i].value.match(myRegexp)
      ) {
        input[i].style =
          "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; animation: error 0.1s";
        bgColor.style =
          "transition: background-color 3s; background-color: #FF7777;";
        header.style =
          "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
      } else {
        input[i].style = "";
        bgColor.style = "";
      }
    }

    if (input[i].classList.contains("input-password")) {
      if (
        input[i].value === "" ||
        input[i].value.length < 8 ||
        input[i].value.match(myRegexp)
      ) {
        modal[i].style =
          "border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); animation: error 0.1s";
        input[i].style =
          "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; animation: error 0.1s";
        bgColor.style =
          "transition: background-color 3s; background-color: #FF7777;";
        header.style =
          "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
      } else {
        input[i].style = "";
        bgColor.style = "";
      }
    }

    if (input[i].classList.contains("input-email")) {
      if (input[i].value === "") {
        modal[i].style =
          "border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); animation: error 0.1s";
        input[i].style =
          "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; animation: error 0.1s";
        bgColor.style =
          "transition: background-color 3s; background-color: #FF7777;";
        header.style =
          "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
      } else {
        input[i].style = "";
        bgColor.style = "";
      }
    }
  });
}

formItem.forEach((form, i) => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    validation(inputName);
    validation(inputPassword);
    validation(inputEmail);
  });
});
