const BtnBrightnessSwitch = document.querySelector(".brightnessSwitch");
const lamp = document.querySelector(".brightnessSwitch i ");
const Subjects = document.querySelectorAll(".subject");
const Subject = document.querySelector(".subjects");
const title = document.querySelectorAll(".title");
const MyName = document.querySelector(`.name`);
const stars = document.querySelectorAll(`.fa-star`);
const span = document.querySelector(`span`);
let Titles = [`  Java-Script,Front-end,React-Developer.`];
const keyboardEfect = document.querySelector('.keyboardEfect')

let flaga = false;
BtnBrightnessSwitch.addEventListener("click", () => {
  flaga = !flaga;
  if (flaga) {
    lamp.classList.remove(`fa-lightbulb`);
    lamp.classList.add(`fa-moon`);
    document.body.style.backgroundColor = "#c5fdc2";
    MyName.style.backgroundColor = "rgb(91, 248, 88)";
    MyName.style.borderRadius = "18px";

    Subjects.forEach((Subject) => {
      Subject.style.backgroundColor = "white";
    });
    Subject.style.backgroundColor = "white";
    title.forEach((title) => {
      title.style.backgroundColor = "rgb(91, 248, 88)";
    });
    stars.forEach((star) => {
      star.style.color = " rgb(236, 228, 1)";
    });
    BtnBrightnessSwitch.style.backgroundColor = "rgb(91, 248, 88)";
  } else {
    lamp.classList.remove(`fa-moon`);
    lamp.classList.add(`fa-lightbulb`);
    document.body.style.backgroundColor = "rgb(34, 0, 82)";
    MyName.style.backgroundColor = "blueviolet";
    MyName.style.borderRadius = "18px";
    Subjects.forEach((Subject) => {
      Subject.style.backgroundColor = "rgb(242, 226, 255)";
    });
    Subject.style.backgroundColor = "rgb(242, 226, 255)";
    title.forEach((title) => {
      title.style.backgroundColor = "blueviolet";
    });
    stars.forEach((star) => {
      star.style.color = " rgb(221, 148, 1)";
    });
    BtnBrightnessSwitch.style.backgroundColor = "blueviolet";
  }
});
const Typing = () => {
  licznik = 0;
  setInterval(() => {
    Titles.forEach((title) => {
      if (licznik === title.length) return;
      span.textContent += title[licznik];
      licznik++;
    });
  }, 100);
};
const AddKeybordEfect = ()=>{
  setInterval(()=>{
    keyboardEfect.classList.add("active")
   

  },200)
}
const RemoveKeybordEfect = ()=>{
  setInterval(()=>{
    keyboardEfect.classList.remove("active")
   

  },1000)
}

window.addEventListener(`load`, Typing);
window.addEventListener('load',AddKeybordEfect)
window.addEventListener('load',RemoveKeybordEfect)
