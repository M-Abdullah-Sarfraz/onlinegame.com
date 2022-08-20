"use strict";

const highnumber = document.querySelector(".highnumber");
const gamescore = document.querySelector(".gamescore");
const totalscore = document.querySelector(".totalscore");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const chances = document.querySelector(".chances");
const cluescore = document.querySelector(".cluescore");
const body = document.querySelector("body");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

let chanceleft = 12;
let random = Math.trunc(Math.random() * 50) + 1;
highnumber.textContent = "Enter any number";
result.textContent = "";

document.querySelector(".guess").addEventListener("click", function () {
  const num = Number(number.value);

  if (num > random) {
    highnumber.textContent = "⤴ high number";
    chanceleft -= 1;
    chances.textContent = chanceleft;
  } else if (num < random) {
    highnumber.textContent = "⤵ low number";
    chanceleft -= 1;
    chances.textContent = chanceleft;
  } else if (num == random) {
    result.textContent = "🎉 You Won the game";
    body.style.backgroundColor = "rgb(2, 147, 2)";
    number.textContent = random;
    gamescore.textContent = chanceleft;
  }
  if (chanceleft <= 0) {
    result.textContent = "😭 You lost the game";
    body.style.backgroundColor = "red";
    highnumber.textContent = "";
    gamescore.textContent = "";
    chances.textContent = "";
  }

  if (num > 50) {
    highnumber.textContent = "Enter between 1 & 50";
  }
});

again.addEventListener("click", function () {
  random = Math.trunc(Math.random() * 50) + 1;
  chanceleft = 12;
  highnumber.textContent = "Enter any number";
  result.textContent = "";
  number.textContent = "";
  chances.textContent = chanceleft;
  body.style.backgroundColor = "rgb(240, 238, 85)";
});
