const signUpBtn = document.querySelector("#signUpBtn");
const logInBtn = document.querySelector("#finishLogIn")
const authMenu = document.querySelector(".authMenu");
const logInBar = document.querySelector(".logInBar")
const smallInputBox = document.querySelectorAll(".smallInput");
const bigInputBox = document.querySelectorAll(".bigInput");
const rightSideSec = document.querySelector(".secRightSide");
const logInOpt = document.querySelector(".userLogIn");
const logInOptMsg = document.querySelector(".userAccInfoBox");
const chatIcon = document.querySelector(".chat");
const chatInfo = document.querySelector(".chatInfo");

// SignUp/LogIn 
signUpBtn.addEventListener("click", function makeAuthMenuVisible() {
  authMenu.style.display = "block";
  logInBar.style.display = "none";
});

logInOpt.addEventListener("click", function makeLogInMenuVisible() {
    logInBar.style.display = "block";
    authMenu.style.display = "none";
  });

  //Login Hover
logInOpt.addEventListener("mouseover", function displayTheMsg(){
    logInOptMsg.style.display = "block";
})

logInOpt.addEventListener("mouseout", function hideTheMsg(){
    logInOptMsg.style.display = "none";
})

