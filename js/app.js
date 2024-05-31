// task #01 -----------------------------------------------------



let clockDiv = document.getElementById("clock-display");
let startClockBtn = document.getElementById("start-clock-button");
let stopClockBtn = document.getElementById("stop-clock-button");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let myInterval;
let d;
let hr;
let min;
let sec;
let hr_rotation;
let min_rotation;
let sec_rotation;

startClockBtn.addEventListener("click", startClock);
stopClockBtn.addEventListener("click", stopClock);

function startClock(){

    myInterval = setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
  }, 1000);

  /*myInterval = setInterval(function () {
    clockDiv.innerText = `Time Now : ${new Date().toLocaleTimeString()}`;
  }, 1000)*/
}
function stopClock(){
  clearInterval(myInterval);
  clockDiv.innerText = ``;
}

//--------------------------------------------------------------

// task #02 ----------------------------------------------------

let advertisingWindow;
let btnOpenWindow = document.getElementById("open-window-button");
btnOpenWindow.addEventListener("click", () => {

  setTimeout(function () {
    advertisingWindow = window.open("https://www.google.com/", "_blank", "popup=true");
  }, 3000)
})

//---------------------------------------------------------------

//task #03 ------------------------------------------------------

let loginBtn = document.getElementById("login-form-submit");
let loginForm = document.getElementById("login-form");

loginBtn.addEventListener("click", () => {

  // redirect to another page

  loginForm.submit();
})
// task #04 -----------------------------------------------------

let scrollPosition = 0;
document.getElementById("start-scroll-button").addEventListener('click', function () {
  setInterval(function (){
    scroll({top: scrollPosition += 100, behavior: "smooth"})
  }, 1000)
})

//---------------------------------------------------------------

//task #05 ------------------------------------------------------

const nameRegExp = /^[A-Z][A-Za-z]{2,}\s[A-Z][A-Za-z]{2,}$/;
const emailRegExp = /^[A-Za-z0-9._#${|}\$]{2,}@[a-z0-9.-]+(\.[a-z0-9\.-]+)*.eg$/;
let validateBtn = document.getElementById("data-validation-btn");
let nameInput = document.getElementById("user-name-2");
let emailInput = document.getElementById("email");


validateBtn.addEventListener("click", function () {
  if(nameRegExp.exec(nameInput.value)){
    nameInput.style.border = "2px solid green";
  }else{
    nameInput.style.border = "2px solid red";
  }
  if(emailRegExp.exec(emailInput.value)){
    emailInput.style.border = "2px solid green";
  } else {
    emailInput.style.border = "2px solid red";
  }
})

