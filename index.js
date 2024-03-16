var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "Dice Images/dice" + randomNum1 + ".jpg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "Dice Images/dice" + randomNum2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

var randomNum3 = Math.floor(Math.random() * 6) + 1;
var randomImageSource3 = "Dice Images/dice" + randomNum3 + ".jpg";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImageSource3);

var randomNum4 = Math.floor(Math.random() * 6) + 1;
var randomImageSource4 = "Dice Images/dice" + randomNum4 + ".jpg";
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", randomImageSource4);

//Main Logic

var maxNum = Math.max(randomNum1, randomNum2, randomNum3, randomNum4);
var DiesNumbers = [randomNum1, randomNum2, randomNum3, randomNum4];
var winnerArray = [];

for (let index = 0; index < DiesNumbers.length; index++) {
  if (DiesNumbers[index] === maxNum) {
    winnerArray.push(index + 1);
  }
}

if (winnerArray.length > 1) {
  document.querySelector("h1").innerHTML = "Ohh! The match has been tied.";
} else {
  winnerArray.forEach((element) => {
    document.querySelector("h1").innerHTML =
      "Hurray! The winner of the match is the Player" + " " + element + ".";
  });
}
