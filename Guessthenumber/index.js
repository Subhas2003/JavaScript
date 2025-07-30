let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please enter a valid number...");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess===11) {
      cleanupguess(guess);
      displaymessage(`Game Over.Random number was ${randomNumber}`);
      endgame();
    } else {
      cleanupguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  //
  if (guess === randomNumber) {
    displaymessage(`You guess right `);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`Numberm is too Low`);
  } else if (guess > randomNumber) {
    displaymessage(`Number is too High`);
  }
}

function cleanupguess(guess) {
  //
  userinput.value = "";
  guessslot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displaymessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
  //
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id ='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  //
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute("disabled");
    startOver.removeChild(p);

    playgame = true;
  });
}
