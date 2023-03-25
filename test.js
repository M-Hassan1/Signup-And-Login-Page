const passRef = document.getElementById("pass")
const confirmPassRef = document.getElementById("cpass")
const showPassRef = document.querySelector(".checkbox")
const STORAGE_KEY = 'isTypePassword';
const storage = window.localStorage;
const password = String.value
let isTypePassword = true;

function init(){
  const storageValue = storage.getItem(STORAGE_KEY);

  if(storageValue == undefined){
    return;
  }
  
  const isStoredTypePassword = storageValue.toLowerCase() === 'true' ? true : false;

  if(isStoredTypePassword){
    passRef.type = "password";
    confirmPassRef.type = "password";
    isTypePassword = true;    
    showPassRef.checked = false;
  }else{
    passRef.type = "text";
    confirmPassRef.type = "text";
    isTypePassword = false;
    showPassRef.checked = true;
  }
  
}



init();

function tsxtPassword(){
if(isTypePassword){
  passRef.type = "password";
  confirmPassRef.type = "password";
  isTypePassword = true;  

}


}

function showpassword() {
  if (isTypePassword) {
    updateType(isTypePassword);
    isTypePassword = false;    
   
  } else {
    updateType(isTypePassword);
    isTypePassword = true;   
  }
};

function updateType(isTypePassword){
  if (isTypePassword) {
    passRef.type = "text";
    confirmPassRef.type = "text";
    isTypePassword = false;
    storage.setItem(STORAGE_KEY,isTypePassword);
  } else {
    passRef.type = "password";
    confirmPassRef.type = "password";
    isTypePassword = true;
    storage.setItem(STORAGE_KEY,isTypePassword);
  }
}
const buttonRef = document.querySelector(".btn");
const btn2 = buttonRef.querySelector(".submit");

buttonRef.addEventListener("click", function (e) {
  console.log(e.offsetX);
  console.log(e.offsetY);

  const offX = e.offsetX;
  const offY = e.offsetY;
  btn2.style.left = `${offX}px`;
  btn2.style.top = `${offY}px`;

  btn2.style.transitionDuration = "450ms";
  btn2.style.width = "300%";
  btn2.style.height = "300%";
  btn2.style.opacity = "0";
  const durationStyle = window.getComputedStyle(btn2).transitionDuration;
  const durationMiliSec = parseFloat(durationStyle) * 1000;


  window.setTimeout(() => {
    btn2.style.transitionDuration = "0ms";
    btn2.style.width = "0%";
    btn2.style.height = "0%";
    btn2.style.opacity = "1";
  }, durationMiliSec);
});

let scrollPos = 0;
const interval = window.setInterval(() => {
  scrollPos += 900;
  window.scrollTo({ top: scrollPos })
}, 3000);