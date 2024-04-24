var date = new Date();

var day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
var month =
  date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
var year = date.getFullYear();
var hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
var minutes =
  date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();

var attempts = 0;
var total = document.getElementById("total");
var message = document.querySelector(".message h3");

total.innerText = 0;
message.innerHTML = "Roll the Dice to Start!";

document.getElementById("day").textContent =
  day + "/" + month + "/" + year + " at " + hours + ":" + minutes;

setDice1(getRandomDiceNumber());
setDice2(getRandomDiceNumber());

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function setDice1(number) {
  var img = document.querySelector(".dices .dice:first-of-type img");
  var p = document.querySelector(".dices .dice:first-of-type .dice-label");

  img.setAttribute("src", "dice-" + number + ".svg");
  p.innerText = "Dice " + number;
}

function setDice2(number) {
  var img = document.querySelector(".dices .dice:last-of-type img");
  var p = document.querySelector(".dices .dice:last-of-type .dice-label");

  img.setAttribute("src", "dice-" + number + ".svg");
  p.innerText = "Dice " + number;
}

function roll() {
  attempts++;
  var number1 = getRandomDiceNumber();
  var number2 = getRandomDiceNumber();

  total.innerHTML = attempts;

  if ((number1 + number2) >= 8) {
    message.innerHTML = "You Win: Try Again!";
  }else{
    message.innerHTML = "You didn't win: Try Again!";
  }

  setDice1(number1);
  setDice2(number2);
}
