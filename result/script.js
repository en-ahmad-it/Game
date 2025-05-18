
let score=0;

const closeBack = document.querySelector('.close-lightbox');
closeBack.addEventListener('click', () => {
    let back=document.querySelector(".back");
  back.classList.add('hide');
});
let btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
       let back=document.querySelector(".back");
  back.classList.remove('hide'); 
});
let choses = document.querySelectorAll(".gameBord div");
let gameBord = document.querySelector(".gameBord");
let arr = ["Paper", "Scissor", "Rock"];
let srcs = ["images/icon-paper.svg", "images/icon-scissors.svg", "images/icon-rock.svg"];
let result = document.querySelector(".result");
let resulth1 = document.querySelector(".result h1");

function final(winner, plyer, computer) {


  let result1 = document.querySelector(".gameBord1");
  let one = document.querySelector(".gameBord1 .one");
  let tow = document.querySelector(".gameBord1 .tow");
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");

  img1.src = srcs[plyer];
  img2.src = srcs[computer];

  result1.style.display = "grid";
  gameBord.style.display = "none";

  if (winner == "computer") {
    tow.classList.add("winner");
    resulth1.innerHTML = "You Lose";
        score--;
    window.localStorage.setItem("score",score);
  } else if (winner == "plyer") {
    score++;
    window.localStorage.setItem("score",score);
    one.classList.add("winner");
    resulth1.innerHTML = "You Win";
  } else {
    resulth1.innerHTML = "No Win";
  }

  let val = document.querySelector(".value");
  val.innerHTML = "";
  let c=window.localStorage.getItem("score");
  val.append(c);

  let newGame = document.querySelector(".result .but");
  newGame.addEventListener("click", () => {
    result1.style.display = "none";
    gameBord.style.display = "";
    one.classList.remove("winner");
    tow.classList.remove("winner");
  });
}

function startGame(src, i) {
  let computer = parseInt(Math.random() * 3);
  let plyer = arr[i];

  let b;
  if (
    (plyer === "Scissor" && arr[computer] === "Paper") ||
    (plyer === "Rock" && arr[computer] === "Scissor") ||
    (plyer === "Paper" && arr[computer] === "Rock")
  ) {
    b = "plyer";
  } else if (
    (arr[computer] === "Scissor" && plyer === "Paper") ||
    (arr[computer] === "Rock" && plyer === "Scissor") ||
    (arr[computer] === "Paper" && plyer === "Rock")
  ) {
    b = "computer";
  } else {
    b = "";
  }

  final(b, i, computer);
}

choses.forEach((e, i) => {
  e.addEventListener("click", () => {
    let img = e.querySelector("img");
    startGame(img.src, i);
  });
});
window.onload=function(){
    let val = document.querySelector(".value");
  val.innerHTML = "";
  let c=window.localStorage.getItem("score");
  val.append(c);
}
