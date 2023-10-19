let randomNumber1 = Math.floor(Math.random() * 6) + 1; //random nr between 1 and 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //random img from dice1.png to dice6.png

let randomImageSrc = "images/" + randomDiceImage; // set the src attributes for our images to images/dice1.png - images/dice6.png so we can later change the attribute

//now we need to select the elements - we use querySelectorAll cause we have 2 img tags in our HTML. To select the 1st one we use [0]
//I also added it to a variable
let image1 = document.querySelectorAll("img")[0];

//changes the src attribute to the random one in variable randomImageSrc
image1.setAttribute("src", randomImageSrc);

//we do the same for image2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSrc2 = "images/dice" + randomNumber2 + ".png"; //shorter version

let image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSrc2); //shorter version

//Title changes depending on winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
