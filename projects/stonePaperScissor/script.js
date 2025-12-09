let userscore = 0;
let compscore = 0;
let choices = ["rock", "paper", "scissors"];

let choice = document.querySelectorAll(".choice");
let result_text = document.querySelector("#result");
let uscore = document.querySelector("#u-score");
let cscore = document.querySelector("#c-score");
let reset = document.querySelector(".reset");

const compChoice = () => {
  const idxGuess = Math.floor(Math.random() * 3);
  return idxGuess;
};

const finalCheck = (userwin) => {
  if (userwin) {
    userscore++;
    result_text.innerText = "You won";
    uscore.innerText = userscore;
  } else {
    compscore++;
    result_text.innerText = "You lost";
    cscore.innerText = compscore;
  }
};

const playgame = (choiceId) => {
  const userchoice = choiceId;
  //   console.log(userchoice);
  let idx = compChoice();
  const compchoice = choices[idx];
  let userwin = true;

  if (userchoice == compchoice) {
    // draw game
    result_text.innerText = "It was a draw";
  } else {
    if (userchoice == "rock") {
      if (compchoice == "paper") {
        userwin = false;
      }
    } else if (userchoice == "paper") {
      if (compchoice == "scissors") {
        userwin = false;
      }
    } else if (userchoice == "scissors") {
      if (compchoice == "rock") {
        userwin = false;
      }
    }
    finalCheck(userwin);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    choiceId = choice.getAttribute("id");
    playgame(choiceId);
  });
});

reset.addEventListener("click", () => {
  userscore = 0;
  compscore = 0;
  uscore.innerText = userscore;
  cscore.innerText = compscore;
});
