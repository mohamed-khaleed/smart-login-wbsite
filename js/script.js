let loginEmailInput = document.getElementById("loginEmailInput");
let loginPasswordInput = document.getElementById("loginPasswordInput");
let loginBtn = document.getElementById("loginBtn");
let signUpEmailInput = document.getElementById("signUpEmailInput");
let signUpNameInput = document.getElementById("signUpNameInput");
let signUpPasswordInput = document.getElementById("signUpPasswordInput");
let signUpBtn = document.getElementById("signUpBtn");
let loginSection = document.getElementById("login");
let signUpSection = document.getElementById("signUp");
let mainSection = document.getElementById("main");
let h1 = document.getElementById("h1");
let loginSpan = document.getElementById("loginSpan");
let signUpSpan = document.getElementById("signUpSpan");
let SignUpEmailAlertBox = document.getElementById("SignUpEmailAlertBox");
let SignUpPasswordAlertBox = document.getElementById("SignUpPasswordAlertBox");
let SignUpUserNameAlertBox = document.getElementById("SignUpUserNameAlertBox");
let loginEmailAlertBox = document.getElementById("loginEmailAlertBox");
let loginPasswordAlertBox = document.getElementById("loginPasswordAlertBox");
let usersContainer;

if (localStorage.getItem("userInfo") == null) {
  usersContainer = [];
} else {
  usersContainer = JSON.parse(localStorage.getItem("userInfo"));
}

function addUser() {
  if (
    validateSignUpEmailInput() &&
    validateSignUpPasswordInput() &&
    validateSignUpUserNameInput() == true
  ) {
    let user = {
      name: signUpNameInput.value,
      email: signUpEmailInput.value,
      password: signUpPasswordInput.value,
    };
    usersContainer.push(user);
    localStorage.setItem("userInfo", JSON.stringify(usersContainer));
    clearForm();
    console.log(usersContainer);
  }
}

function signUp() {
  loginSection.style.display = "block";
  signUpSection.style.display = "none";
}

function login() {
  if (validateLoginEmailInput() && validateLoginPasswordInput() == true) {
    let signUpEmail;
    let signUpPassword;
    let signUpName;
    for (i = 0; i < usersContainer.length; i++) {
      signUpEmail = JSON.parse(localStorage.getItem("userInfo"))[i].email;
      signUpPassword = JSON.parse(localStorage.getItem("userInfo"))[i].password;
      signUpName = JSON.parse(localStorage.getItem("userInfo"))[i].name;

      if (
        loginEmailInput.value === signUpEmail &&
        loginPasswordInput.value === signUpPassword
      ) {
        loginSection.style.display = "none";
        signUpSection.style.display = "none";
        mainSection.style.display = "block";
        h1.innerText = `welcome ${signUpName}`;
      } else {
        console.log("not here");
      }
    }
  }
}

function clearForm() {
  signUpNameInput.value = "";
  signUpEmailInput.value = "";
  signUpPasswordInput.value = "";
}

loginSpan.addEventListener("click", function () {
  loginSection.style.display = "none";
  signUpSection.style.display = "block";
  mainSection.style.display = "none";
});
signUpSpan.addEventListener("click", function () {
  loginSection.style.display = "block";
  signUpSection.style.display = "none";
  mainSection.style.display = "none";
});

signUpBtn.addEventListener("click", function () {
  if (
    validateSignUpEmailInput() &&
    validateSignUpPasswordInput() &&
    validateSignUpUserNameInput() == true
  ) {
    addUser();
    signUp();
  }
});

loginBtn.addEventListener("click", function () {
  if (validateLoginEmailInput() && validateLoginPasswordInput() == true) {
    login();
  }
});

function validateSignUpEmailInput() {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(signUpEmailInput.value) == true) {
    signUpEmailInput.classList.add("is-valid");
    signUpEmailInput.classList.remove("is-invalid");
    SignUpEmailAlertBox.classList.add("d-none");
    SignUpEmailAlertBox.classList.remove("d-block");
    return true;
  } else {
    signUpEmailInput.classList.add("is-invalid");
    signUpEmailInput.classList.remove("is-valid");
    SignUpEmailAlertBox.classList.add("d-block");
    SignUpEmailAlertBox.classList.remove("d-none");
    return false;
  }
}

function validateSignUpPasswordInput() {
  let regex =
    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if (regex.test(signUpPasswordInput.value) == true) {
    signUpPasswordInput.classList.add("is-valid");
    signUpPasswordInput.classList.remove("is-invalid");
    SignUpPasswordAlertBox.classList.add("d-none");
    SignUpPasswordAlertBox.classList.remove("d-block");
    return true;
  } else {
    signUpPasswordInput.classList.add("is-invalid");
    signUpPasswordInput.classList.remove("is-valid");
    SignUpPasswordAlertBox.classList.add("d-block");
    SignUpPasswordAlertBox.classList.remove("d-none");
    return false;
  }
}

function validateSignUpUserNameInput() {
  let regex = /^[a-zA-Z0-9_-]{4,16}$/;
  if (regex.test(signUpNameInput.value) == true) {
    signUpNameInput.classList.add("is-valid");
    signUpNameInput.classList.remove("is-invalid");
    SignUpUserNameAlertBox.classList.add("d-none");
    SignUpUserNameAlertBox.classList.remove("d-block");
    return true;
  } else {
    signUpNameInput.classList.add("is-invalid");
    signUpNameInput.classList.remove("is-valid");
    SignUpUserNameAlertBox.classList.add("d-block");
    SignUpUserNameAlertBox.classList.remove("d-none");
    return false;
  }
}

signUpNameInput.addEventListener("keyup", validateSignUpUserNameInput);
signUpPasswordInput.addEventListener("keyup", validateSignUpPasswordInput);
signUpEmailInput.addEventListener("keyup", validateSignUpEmailInput);

function validateLoginEmailInput() {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(loginEmailInput.value) == true) {
    loginEmailInput.classList.add("is-valid");
    loginEmailInput.classList.remove("is-invalid");
    loginEmailAlertBox.classList.add("d-none");
    loginEmailAlertBox.classList.remove("d-block");
    return true;
  } else {
    loginEmailInput.classList.add("is-invalid");
    loginEmailInput.classList.remove("is-valid");
    loginEmailAlertBox.classList.add("d-block");
    loginEmailAlertBox.classList.remove("d-none");
    return false;
  }
}
function validateLoginPasswordInput() {
  let regex =
    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if (regex.test(loginPasswordInput.value) == true) {
    loginPasswordInput.classList.add("is-valid");
    loginPasswordInput.classList.remove("is-invalid");
    loginPasswordAlertBox.classList.add("d-none");
    loginPasswordAlertBox.classList.remove("d-block");
    return true;
  } else {
    loginPasswordInput.classList.add("is-invalid");
    loginPasswordInput.classList.remove("is-valid");
    loginPasswordAlertBox.classList.add("d-block");
    loginPasswordAlertBox.classList.remove("d-none");
    return false;
  }
}

loginEmailInput.addEventListener("keyup", validateLoginEmailInput);
loginPasswordInput.addEventListener("keyup", validateLoginPasswordInput);
