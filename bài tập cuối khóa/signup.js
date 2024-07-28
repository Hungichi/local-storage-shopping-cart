
let list_person_object = [];
let t = JSON.parse(localStorage.getItem("listUser"));
let popup = document.querySelector('.popup')
let iconclose = document.querySelector('.popup__header i')
let creatsuccess = document.querySelector('.popup__body h2');
let useremp = document.querySelector('.popup__body h2');
let userexist = document.querySelector('.popup__body h2');
let passemp = document.querySelector('.popup__body h2');
let cfemp = document.querySelector('.popup__body h2');
if (t == null) {
  localStorage.setItem("listUser", JSON.stringify(list_person_object));
  location.reload();
} else {
  let list = JSON.parse(localStorage.getItem("listUser"));

  let btn = document.querySelector(".butn");
  btn.addEventListener("click", function () {
    let newUser = {};
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let CFpaswordInput = document.getElementById("CFpassword").value;

    // Check user and password
    let checkUsername = checkValidateUser(usernameInput);
    let checkPassword = checkPassword1(passwordInput);
    let checkCFPassword = checkCF(CFpaswordInput);
    if (checkUsername == true && checkPassword == true && checkCFPassword == true) {
      newUser = {
        username: usernameInput,
        password: passwordInput,

      }

      list.push(newUser);
      localStorage.setItem("listUser", JSON.stringify(list));

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      creatsuccess.innerHTML="create successfully"
      toggle()
    }

  });
}

// checkUsername
function checkValidateUser(userAccount) {
  if (userAccount == "") {
    // console.log(useremp)
    useremp.innerHTML="user empty"
    toggle()
    return false;
  }
  // userAccount tên user ng dùng nhập => string

  let listUser = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < listUser.length; i++) {
    if (userAccount == listUser[i].username) {
      userexist.innerHTML="User existed"
      toggle()
      return false;
    }
  }

  return true;
}

// checkPassword
function checkPassword1(userPassword) {
  if (userPassword == "") {
    passemp.innerHTML="password empty"
    toggle()
    return false;
  }

  return true;
}
function checkCF(userCF, userPassword) {
  if (userCF == "" || userCF == userPassword) {
    cfemp.innerHTML="wrong/empty confirm password"
    toggle()
    return false;
  }
  
  return true;
}
// popup
function toggle(e){
  popup.classList.toggle('hide')
}
iconclose.addEventListener('click', toggle)
popup.addEventListener('click' , function(e)  {
  if(e.target == e.currentTarget){
    toggle()
  }
})