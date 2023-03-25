const buttonRef = document.querySelector(".btn");
const btnRef = buttonRef.querySelector(".submit");

buttonRef.addEventListener("click", function (e) {
  console.log(e.offsetX);
  console.log(e.offsetY);

  const offX = e.offsetX;
  const offY = e.offsetY;
  btnRef.style.left = `${offX}px`;
  btnRef.style.top = `${offY}px`;

  btnRef.style.transitionDuration = "450ms";
  btnRef.style.width = "300%";
  btnRef.style.height = "300%";
  btnRef.style.opacity = "0";
  const durationStyle = window.getComputedStyle(btnRef).transitionDuration;
  const durationMiliSec = parseFloat(durationStyle) * 1000;
  

  window.setTimeout(() => {
    btnRef.style.transitionDuration = "0ms";
    btnRef.style.width = "0%";
    btnRef.style.height = "0%";
    btnRef.style.opacity = "1";
  }, durationMiliSec);
});

let scrollPos = 0;
const interval = window.setInterval(() => {
  scrollPos +=900;
  window.scrollTo({top: scrollPos})
}, 3000);