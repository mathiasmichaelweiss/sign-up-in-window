"use strict";

window.addEventListener("DOMContentLoaded", () => {
  /* inputs for Modal and JS mini DB*/
  const modalInputs = {
    upName:
      '<div class="reg-form-item"><p class="reg-form-item_title">name</p><p class="upNameContainer"><input class="input-name upName" type="name" placeholder="enter your name" maxlength="20"/></p><div class="line"></div></div>',
    inName:
      '<div class="reg-form-item"><p class="reg-form-item_title">name</p><p class="inNameContainer"><input class="input-name inName" type="name" placeholder="enter your name" maxlength="20"/></p><div class="line"></div></div>',
    email:
      '<div class="reg-form-item"><p class="reg-form-item_title">e-mail</p><p><input class="input-email" type="email" placeholder="enter your e-mail" /></p><div class="line"></div></div>',
    upPassword:
      '<div class="reg-form-item"><p class="reg-form-item_title">password</p><p class="password upPasswordContainer"><input class="input-password upPassword" type="password" placeholder="enter your password"  maxlength="25"/><span class="vision-container"></span><div class="line"></div></p></div>',
    inPassword:
      '<div class="reg-form-item"><p class="reg-form-item_title">password</p><p class="password inPasswordContainer"><input class="input-password inPassword" type="password" placeholder="enter your password"  maxlength="25"/><span class="vision-container"></span><div class="line"></div></p></div>',
    checkbox:
      '<input type="checkbox" class="privacy-check" /><p class="privacy">i agree with all <a href="">terms & conditions & privacy policy</a></p>'
  };

  const modals = {
    signUp: [
      "create account",
      "sign in",
      `${modalInputs.upName}`,
      `${modalInputs.email}`,
      `${modalInputs.upPassword}`,
      `${modalInputs.checkbox}`,
      "sign up",
      "in",
      "inClass",
      ".container"
    ],
    signIn: [
      "sign in",
      "sign up",
      `${modalInputs.inName}`,
      ``,
      `${modalInputs.inPassword}`,
      ``,
      "sign in",
      "up",
      "upClass",
      ".container"
    ]
  };

  const svgDB = {
    help:
      '<svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" fill="#E5E5E5"/><path d="M4.39453 6.39844C4.39974 6.08854 4.4349 5.84375 4.5 5.66406C4.5651 5.48438 4.69792 5.28516 4.89844 5.06641L5.41016 4.53906C5.62891 4.29167 5.73828 4.02604 5.73828 3.74219C5.73828 3.46875 5.66667 3.25521 5.52344 3.10156C5.38021 2.94531 5.17188 2.86719 4.89844 2.86719C4.63281 2.86719 4.41927 2.9375 4.25781 3.07812C4.09635 3.21875 4.01562 3.40755 4.01562 3.64453H3.29297C3.29818 3.22266 3.44792 2.88281 3.74219 2.625C4.03906 2.36458 4.42448 2.23438 4.89844 2.23438C5.39062 2.23438 5.77344 2.36719 6.04688 2.63281C6.32292 2.89583 6.46094 3.25781 6.46094 3.71875C6.46094 4.17448 6.25 4.6237 5.82812 5.06641L5.40234 5.48828C5.21224 5.69922 5.11719 6.0026 5.11719 6.39844H4.39453ZM4.36328 7.63672C4.36328 7.51953 4.39844 7.42188 4.46875 7.34375C4.54167 7.26302 4.64844 7.22266 4.78906 7.22266C4.92969 7.22266 5.03646 7.26302 5.10938 7.34375C5.18229 7.42188 5.21875 7.51953 5.21875 7.63672C5.21875 7.75391 5.18229 7.85156 5.10938 7.92969C5.03646 8.00521 4.92969 8.04297 4.78906 8.04297C4.64844 8.04297 4.54167 8.00521 4.46875 7.92969C4.39844 7.85156 4.36328 7.75391 4.36328 7.63672Z" fill="rgba(0, 0, 0, 0.8)"/></svg>',
    helpError:
      '<svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" fill="#FF7676"/><path d="M4.39453 6.39844C4.39974 6.08854 4.4349 5.84375 4.5 5.66406C4.5651 5.48438 4.69792 5.28516 4.89844 5.06641L5.41016 4.53906C5.62891 4.29167 5.73828 4.02604 5.73828 3.74219C5.73828 3.46875 5.66667 3.25521 5.52344 3.10156C5.38021 2.94531 5.17188 2.86719 4.89844 2.86719C4.63281 2.86719 4.41927 2.9375 4.25781 3.07812C4.09635 3.21875 4.01562 3.40755 4.01562 3.64453H3.29297C3.29818 3.22266 3.44792 2.88281 3.74219 2.625C4.03906 2.36458 4.42448 2.23438 4.89844 2.23438C5.39062 2.23438 5.77344 2.36719 6.04688 2.63281C6.32292 2.89583 6.46094 3.25781 6.46094 3.71875C6.46094 4.17448 6.25 4.6237 5.82812 5.06641L5.40234 5.48828C5.21224 5.69922 5.11719 6.0026 5.11719 6.39844H4.39453ZM4.36328 7.63672C4.36328 7.51953 4.39844 7.42188 4.46875 7.34375C4.54167 7.26302 4.64844 7.22266 4.78906 7.22266C4.92969 7.22266 5.03646 7.26302 5.10938 7.34375C5.18229 7.42188 5.21875 7.51953 5.21875 7.63672C5.21875 7.75391 5.18229 7.85156 5.10938 7.92969C5.03646 8.00521 4.92969 8.04297 4.78906 8.04297C4.64844 8.04297 4.54167 8.00521 4.46875 7.92969C4.39844 7.85156 4.36328 7.75391 4.36328 7.63672Z" fill="white"/></svg>'
  };

  class Modal {
    constructor(
      title,
      bottomLink,
      name,
      email,
      password,
      checkbox,
      btnText,
      toggleClass,
      modalClass,
      parentSelector
    ) {
      this.title = title;
      this.bottomLink = bottomLink;
      this.name = name;
      this.email = email;
      this.password = password;
      this.checkbox = checkbox;
      this.btnText = btnText;
      this.toggleClass = toggleClass;
      this.modalClass = modalClass;
      this.parent = document.querySelector(parentSelector);
    }
    render() {
      const elem = document.createElement("div");
      elem.classList.add("modal");
      elem.classList.add(`${this.modalClass}`);

      elem.innerHTML = `
    <div class="modal-left">
          <div class="bg"></div>
          <div class="logo">
            <div class="logo-img">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.7801 46.9433L26.7012 27.8644L7.62221 46.9433"
                  stroke="white"
                  stroke-width="5"
                />
                <path
                  d="M85.9883 46.9434L56.2974 17.2524L26.6064 46.9434"
                  stroke="white"
                  stroke-width="5"
                />
                <path
                  d="M45 46L65.5 66.5L87 45"
                  stroke="white"
                  stroke-width="5"
                />
                <path
                  d="M5.99996 45L37.4738 76.4738L67.0043 46.9433"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
            </div>
            <div class="logo-text">mountain view</div>
          </div>
        </div>
        <div class="modal-right">
          <div class="title">${this.title}</div>
          <form action="" class="reg-form">
          ${this.name}
          ${this.email}
          ${this.password}
          ${this.checkbox}
          <div class="btn-container">
          <button>${this.btnText}</button>
          <div class="help">
            
          </div>
          </div>
          </form>
          <div class="go-to-signin">
            already have an account? <a href="#" class="toggle-window ${this.toggleClass}">${this.bottomLink}</a>
          </div>
        </div>
    `;
      this.parent.append(elem);
    }
  }

  const [...signUp] = modals.signUp;
  const [...signIn] = modals.signIn;

  new Modal(...signUp).render();
  new Modal(...signIn).render();

  const modal = document.querySelectorAll(".modal");
  const toggleWindowBtn = document.querySelectorAll(".toggle-window");

  // toggle modal window
  function toggleWindow(i) {
    modal.forEach(item => {
      item.classList.remove("hideWindow");
      modal[i].classList.add("hideWindow");
      item.style = "";
      document.querySelector("body").style = "";
      document.querySelector(".header").style =
        "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 0.4; margin-bottom: 2rem;";
      help[i].innerHTML = svgDB.help;
    });
  }

  toggleWindowBtn.forEach((btn, i) => {
    modal[0].classList.add("hideWindow");
    btn.addEventListener("click", () => toggleWindow(i));
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
      "incorrect password: password must be at least 8 characters long",
    whatCanIUse:
      "please, use only numbers and letters. password must be at least 8 charactes long. name must be a least 4 characters long."
  };

  const formItem = document.querySelectorAll(".reg-form");
  const inputInName = document.querySelector(".inName");
  const inputInPassword = document.querySelector(".inPassword");
  const inputUpName = document.querySelector(".upName");
  const inputUpPassword = document.querySelector(".upPassword");
  const inputEmail = document.querySelector(".input-email");
  const header = document.querySelector(".header");
  const inNameContainer = document.querySelector(".inNameContainer");
  const upNameContainer = document.querySelector(".upNameContainer");
  const inPasswordContainer = document.querySelector(".inPasswordContainer");
  const upPasswordContainer = document.querySelector(".upPasswordContainer");

  if (document.body.clientWidth <= 320) {
    header.remove();
  }

  // Help btn
  const help = document.querySelectorAll(".help");
  const submitBtn = document.querySelectorAll("button");

  function showHelpMessage(message) {
    const helpMessage = document.createElement("div");
    helpMessage.classList.add("message");
    helpMessage.style =
      "position: absolute; width: 190px; font-size: 10px; background: rgba(255, 255, 255, 0.95); bottom: 0; font-variant: normal; border: 1px solid #B2B2B2; padding: 0.5rem; animation: helpMessage 1s; line-height: 1rem";
    helpMessage.innerHTML = `
    ${message}
    `;
    const helpMessage2 = document.createElement("div");
    helpMessage2.classList.add("message");
    helpMessage2.style =
      "position: absolute; width: 190px; font-size: 10px; background: rgba(255, 255, 255, 0.95); bottom: 0; font-variant: normal; border: 1px solid #B2B2B2; padding: 0.5rem; animation: helpMessage 1s; line-height: 1rem";
    helpMessage2.innerHTML = `
    ${message}
    `;
    /* formItem.forEach(item => item.append(helpMessage)); */
    formItem[0].append(helpMessage);
    formItem[1].append(helpMessage2);
  }

  function hideHelpMessage() {
    document.querySelectorAll(".message").forEach(item => item.remove());
  }

  help.forEach(item => {
    item.innerHTML = svgDB.help;
    item.addEventListener("mouseover", e =>
      showHelpMessage(errors.whatCanIUse)
    );
    item.addEventListener("mouseout", e => hideHelpMessage());
  });

  function validation(input, container) {
    const myRegexp = /\W/g;
    const bgColor = document.querySelector("body");

    modal.forEach((item, i) => {
      if (input.classList.contains("input-name")) {
        if (
          input.value === "" ||
          input.value.length < 4 ||
          input.value.match(myRegexp)
        ) {
          item.style =
            "border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); animation: error 0.1s";
          container.style =
            "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; padding-right: 10px; animation: error 0.1s; margin-bottom: 2px";
          bgColor.style =
            "transition: background-color 3s; background-color: #FF7777;";
          header.style =
            "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
          help[i].innerHTML = svgDB.helpError;
        } else {
          help[i].innerHTML = svgDB.help;
          help[i].style = "";
          item.style = "";
          container.style = "";
          bgColor.style = "";
        }
      }

      if (input.classList.contains("input-password")) {
        if (
          input.value === "" ||
          input.value.length < 8 ||
          input.value.match(myRegexp)
        ) {
          item.style =
            "border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); animation: error 0.1s";
          container.style =
            "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; padding-right: 10px; animation: error 0.1s; margin-bottom: 2px";
          bgColor.style =
            "transition: background-color 3s; background-color: #FF7777;";
          header.style =
            "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
          help[i].innerHTML = svgDB.helpError;
        } else {
          help[i].innerHTML = svgDB.help;
          help[i].style = "";
          item.style = "";
          container.style = "";
          bgColor.style = "";
        }
      }

      if (input.classList.contains("input-email")) {
        if (input.value === "") {
          item.style =
            "border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); animation: error 0.1s; animation-iteration-count: 2;";
          input.style =
            "transition: padding-left 1s; border: 1px solid rgba(255, 0, 0, 0.5); box-sizing: border-box; filter: drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.25)); padding-left: 10px; padding-right: 10px; animation: error 0.1s; margin-bottom: 2px";
          bgColor.style =
            "transition: background-color 3s; background-color: #FF7777;";
          header.style =
            "transition: color 1s; width: 100%; display: flex; flex-wrap: wrap;  justify-content: center; font-size: 2rem; opacity: 1; margin-bottom: 2rem; color: rgba(255, 255, 255, 1)";
        } else {
          item.style = "";
          input.style = "";
          bgColor.style = "";
        }
      }
    });
  }

  formItem.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (modal[0].classList.contains("hideWindow")) {
        validation(inputInName, inNameContainer);
        validation(inputInPassword, inPasswordContainer);
      } else {
        validation(inputUpName, upNameContainer);
        validation(inputUpPassword, upPasswordContainer);
        validation(inputEmail);
      }
    });
  });
});
