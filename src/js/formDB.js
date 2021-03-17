export default function formDB() {
  const modalInputs = {
    upName:
      '<div class="reg-form-item"><p class="reg-form-item_title">name</p><p><input class="input-name upName" type="name" placeholder="enter your name" maxlength="20"/></p><div class="line"></div></div>',
    inName:
      '<div class="reg-form-item"><p class="reg-form-item_title">name</p><p><input class="input-name inName" type="name" placeholder="enter your name" maxlength="20"/></p><div class="line"></div></div>',
    email:
      '<div class="reg-form-item"><p class="reg-form-item_title">e-mail</p><p><input class="input-email" type="email" placeholder="enter your e-mail" /></p><div class="line"></div></div>',
    upPassword:
      '<div class="reg-form-item"><p class="reg-form-item_title">password</p><p class="password"><input class="input-password upPassword" type="password" placeholder="enter your password"  maxlength="25"/><span class="vision-container"></span><div class="line"></div></p></div>',
    inPassword:
      '<div class="reg-form-item"><p class="reg-form-item_title">password</p><p class="password"><input class="input-password inPassword" type="password" placeholder="enter your password"  maxlength="25"/><span class="vision-container"></span><div class="line"></div></p></div>',
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
}
