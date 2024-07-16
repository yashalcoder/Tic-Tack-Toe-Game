const allbox = document.querySelectorAll("#box");
let msgContainer = document.querySelector(".msg");
const resetbtn = document.querySelector("#btn-reset");
const newGame = document.querySelector("#newgame");
let turno = true;
let count = 0;
const resetGame = () => {
  for (box of allbox) {
    box.innerText = "";
    box.disabled = false;
  }
  msgContainer.innerText = "";
  turno = true;
};
let allpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBoxes = () => {
  for (box of allbox) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (box of allbox) {
    box.disabled = false;
  }
};
allbox.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count++;
    checkwinner();
  });
});

let showWinner = (winner) => {
  msgContainer.innerText = `Winner is: ${winner}`;
  disableBoxes();
  newGame.classList.remove("hide");
};
const checkwinner = () => {
  for (let pattern of allpatterns) {
    let pos1 = allbox[pattern[0]].innerText;
    let pos2 = allbox[pattern[1]].innerText;
    let pos3 = allbox[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (count === 9) {
        msgContainer.innerText = "No wineer";
        newGame.classList.remove("hide");
      }
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};
resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
