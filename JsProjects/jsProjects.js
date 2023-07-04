const BtnBrightnessSwitch = document.querySelector(".brightnessSwitch");
const lamp = document.querySelector(".brightnessSwitch i ");
const title = document.querySelectorAll(".title");
const MyName = document.querySelector(`.name`);
const stars = document.querySelectorAll(`.fa-star`);
const span = document.querySelector(`span`);
const Subjects = document.querySelectorAll(".subject");
const CommingSoonIMGS = document.querySelectorAll(`.WorkInProgresImg`);

let flaga = false;
BtnBrightnessSwitch.addEventListener("click", () => {
  flaga = !flaga;
  if (flaga) {
    lamp.classList.remove(`fa-lightbulb`);
    lamp.classList.add(`fa-moon`);
    document.body.style.backgroundColor = "#c5fdc2";
    MyName.style.backgroundColor = "rgb(91, 248, 88)";
    MyName.style.borderRadius = "18px";
    title.forEach((title) => {
      title.style.backgroundColor = "rgb(91, 248, 88)";
    });
    stars.forEach((star) => {
      star.style.color = " rgb(236, 228, 1)";
    });
    CommingSoonIMGS.forEach((CommingSoonIMG) => {
      CommingSoonIMG.style.opacity = "0.9";
    });
    BtnBrightnessSwitch.style.backgroundColor = "rgb(91, 248, 88)";
  } else {
    lamp.classList.remove(`fa-moon`);
    lamp.classList.add(`fa-lightbulb`);
    document.body.style.backgroundColor = "rgb(34, 0, 82)";
    MyName.style.backgroundColor = "blueviolet";
    MyName.style.borderRadius = "18px";
    title.forEach((title) => {
      title.style.backgroundColor = "blueviolet";
    });
    stars.forEach((star) => {
      star.style.color = " rgb(221, 148, 1)";
    });
    BtnBrightnessSwitch.style.backgroundColor = "blueviolet";
    CommingSoonIMGS.forEach((CommingSoonIMG) => {
      CommingSoonIMG.style.opacity = "1";
    });
  }
});
