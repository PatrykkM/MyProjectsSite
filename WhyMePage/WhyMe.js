const BtnBrightnessSwitch = document.querySelector(".brightnessSwitch");
const lamp = document.querySelector(".brightnessSwitch i ");
const Subjects = document.querySelectorAll(".subject");
const title = document.querySelectorAll(".title");
const MyName = document.querySelector(`.name`);
const titles = [...document.querySelectorAll(".title")];
const subjects = [...document.querySelectorAll(`.AboutMe`)];
const advantages = [
  `<h4>EXPERIENCE</h4>I have a solid non-commercial experience in programming, which I gained during 3 years of learning programming and projects.. Learning on my own for almost 3 years on various projects, I gained skills in many programming languages, such as JavaScript, Html, CSS, React, MySql, PHP`,
  `<h4>PASSION AND COMMITMENT</h4>programming is my passion, and for me working as a programmer would not be treated only as a source of income, but as a way to develop and create something valuable. I am willing to put in extra effort and study to constantly improve my skills.`,
  `<h4>CREATIVITY AND PROBLEM-SOLVING</h4>I have the ability to think creatively and find innovative solutions. I am happy when I can use my programming skills to solve difficult problems and create effective solutions.`,
  `<h4>TEAMWORK SKILLS</h4> As a programmer, I realize that cooperation with other team members is crucial to the success of projects. I have experience working in teams because I have been working since I turned 18 and I thrive in a dynamic work environment.`,
  `<h4>MOTIVATION TO LEARN</h4> The IT industry is developing very quickly, which is why I am constantly involved in developing my skills and following the latest trends. I am open to learning new technologies and ready to adapt to requirements`,
  `<h4>FOCUS ON QUALITY AND EFFICIENCY</h4> I value high code quality and I care about the effectiveness of the solutions I create. I attach importance to good programming practices, unit testing and creating readable and easy to manage code. I strive to constantly improve my skills and follow the best practices in the industry`,
];
let counter = 0;
titles.forEach((title) => {
  title.addEventListener(`click`, () => {
    if (titles.indexOf(title) == counter) {
      subjects[counter].style.transform = "translateX(0)";
      subjects[counter].innerHTML += advantages[counter];
      counter++;
    } else return;
  });
});
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
    title.forEach((title) => {
      title.style.backgroundColor = "rgb(91, 248, 88)";
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
    title.forEach((title) => {
      title.style.backgroundColor = "blueviolet";
    });
    BtnBrightnessSwitch.style.backgroundColor = "blueviolet";
  }
});
