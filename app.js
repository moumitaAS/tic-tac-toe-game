let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-game");
let resetGame = document.querySelector(".reset-btn");

let player0 = true;
const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disablesBoxes = () => {
  boxes.forEach((val) => {
    val.disabled = true;
  });
}

boxes.forEach((val) => {
  val.addEventListener("click", () => {
    if (player0) {
      val.innerHTML = "X";
      player0 = false;
    } else {
      val.innerText = "O";
      player0 = true;
    }
    val.disabled = true;

    checkWinner();
  });
});



const checkWinner = () => {
  for (let pattern of patterns) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {
        console.log("Winner", position1);
        disablesBoxes();
        winnermsg(position1);
      }
    }
  }
};

const winnermsg = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner} 🎉`;
  msgContainer.classList.remove("hide");

  let balloonContainer = document.querySelector(".balloon-container");
  balloonContainer.innerHTML = ""; // Clear previous balloons
  for (let i = 0; i < 10; i++) {
      let balloon = document.createElement("div");
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      balloon.style.animationDuration = Math.random() * 3 + 2 + "s";
      balloonContainer.appendChild(balloon);
  }

  // Generate Confetti
  for (let i = 0; i < 20; i++) {
      let confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      balloonContainer.appendChild(confetti);
  }
}


const enableBoxes = () => {
  boxes.forEach((val) => {
    val.disabled = false;
    val.innerText = "";
    player0 = true;
    msgContainer.classList.add("hide");
  });
}

newGame.addEventListener("click", enableBoxes);
resetGame.addEventListener("click", enableBoxes);