// register
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");


btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
                            // login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");



btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
