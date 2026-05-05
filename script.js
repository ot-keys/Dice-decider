let btn1 = document.querySelector("button");
let btn2 = document.querySelector(".btn2");
let player1Img = document.querySelector(".l");
let player2Img = document.querySelector(".r");
let h2Element = document.querySelector("h2");

btn1.addEventListener("click", function () {
  let p1 = Math.floor(Math.random() * 6) + 1;
  let p2 = Math.floor(Math.random() * 6) + 1;

  player1Img.src = "./dice" + p1 + ".png";
  player2Img.src = "./dice" + p2 + ".png";

  if (p1 > p2) {
    h2Element.textContent = "Player 1 Wins!";
  } else if (p2 > p1) {
    h2Element.textContent = "Player 2 Wins!";
  } else {
    h2Element.textContent = "Draw";
  }
});

btn2.addEventListener("click", function () {
  h2Element.textContent = "Roll dice!";
  player1Img.src = "./dice1.png";
  player2Img.src = "./dice1.png";
}); 
