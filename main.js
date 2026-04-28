let face = document.querySelector(".face");
let leftHand = document.querySelector(".hand--left");
let rightHand = document.querySelector(".hand--right");
let username = document.querySelector(".username");
let password = document.querySelector(".password");
let tongue = document.querySelector(".breath");
let showbtn = document.querySelector(".password-button");
username.addEventListener("input", faceMove);
username.addEventListener("focus", faceMove);
username.addEventListener("blur", () => {
  face.style.transform = `rotate(0deg)`;
});

function faceMove(e) {
  let usenamelength = username.value.length;
  if (usenamelength > 40) {
    return;
  }
  face.style.transform = `rotate(${20 - usenamelength}deg)`;
}
function add(hid) {
  leftHand.classList.add(hid);
  rightHand.classList.add(hid);
}
function remove(hid) {
  leftHand.classList.remove(hid);
  rightHand.classList.remove(hid);
}
password.addEventListener("focus", () => add("hide"));
password.addEventListener("blur", () => remove("hide"));
showbtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    add("peek");
  } else {
    password.type = "password";
    remove("peek");
  }
  tongue.style.animation = "none";
});
showbtn.addEventListener("blur", () => {
  password.type = "password";
  tongue.style.animation = "breath 0.45s infinite";
  remove("peek");
});