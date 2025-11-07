let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let win = document.querySelector(".win");
let draw = document.querySelector(".draw");
let wreset = document.querySelector("#wreset");
let w_head = document.querySelector("#win-head");
let dreset = document.querySelector("#dreset");
let d_head = document.querySelector("#draw-head");

const wincon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let playerO = true;
let i = 0;

box.forEach((e) => {
  e.addEventListener("click", () => {
    if (playerO) {
      e.innerText = "O";
      playerO = false;
      i++;
    } else {
      e.innerText = "X";
      playerO = true;
      i++;
    }
    e.disabled = true;
    winCon();
    if (i === 9) {
      drawCon();
    }
  });
});

const drawCon = () => {
  draw.classList.add("drawer");
  draw.classList.remove("draw");
  d_head.innerText = `This game was a draw`;
};

const winCon = () => {
  let box1;
  let box2;
  let box3;
  for (let val of wincon) {
    box1 = box[val[0]].innerText;
    box2 = box[val[1]].innerText;
    box3 = box[val[2]].innerText;

    if (box1 !== "" && box2 !== "" && box3 !== "") {
      if (box1 === box2 && box2 === box3) {
        win.classList.add("winner");
        win.classList.remove("win");
        w_head.innerText += `Congradulations!! Player '${box1}'`;
      }
    }
  }
};

wreset.addEventListener("click", () => {
  idx = 0;
  for (let val of box) {
    box[idx].innerText = "";
    box[idx].disabled = false;
    idx++;
  }
  win.classList.add("win");
  win.classList.remove("winner");
  playerO = true;
});

reset.addEventListener("click", () => {
  idx = 0;
  for (let val of box) {
    box[idx].innerText = "";
    box[idx].disabled = false;
    idx++;
  }
  playerO = true;
});

dreset.addEventListener("click", () => {
  idx = 0;
  for (let val of box) {
    box[idx].innerText = "";
    box[idx].disabled = false;
    idx++;
  }
  draw.classList.add("draw");
  draw.classList.remove("drawer");
  playerO = true;
});
