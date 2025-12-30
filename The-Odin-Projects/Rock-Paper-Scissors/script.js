    const buttons = document.querySelectorAll("button")
function playGame(){
    let computerScore =0 ;
    let humanScore =0;
    let ties=0;
    const content = document.querySelector("content")
   const dive = document.querySelector("#Score-display")
let computerChoice;
let num;
let winner;
const humanScoreDiv = document.querySelector("#humanscore")
const compScoreDiv = document.querySelector("#computerscore")
const tieScoreDiv = document.querySelector("#tiescore")
let choicebtn=null;
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    buttons.forEach(b => {
      b.style.backgroundColor = "black";
      b.style.color = "white";
      b.style.transform = "scale(1)";
      b.style.border = "none";
    });
    const humanChoice = e.currentTarget.value;
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = "black";
    e.currentTarget.style.transform = "scale(0.97)";
    e.currentTarget.style.border = "2px solid grey";

    const computerChoice = getComputerChoice();
    const compBtn = Array.from(buttons).find(b => b.value === computerChoice);

    if (humanChoice === computerChoice) {
      compBtn.style.backgroundColor = "green";
      compBtn.style.color = "black";
      compBtn.style.border = "3px solid darkorange";
    } else {
      compBtn.style.backgroundColor = "red";
      compBtn.style.color = "white";
      compBtn.style.transform = "scale(0.97)";
      compBtn.style.border = "2px solid darkred";
    }  

    function getComputerChoice(){
    let choice=0;
num = Math.floor(Math.random()*3);
if (num == 0){
    choice="Rock"
}
else if(num == 1){
choice="Paper"
}
else{
    choice="Scissors"
}
return choice;
}
    function playRound(){
console.log("You chose", humanChoice)
console.log("Computer chose",computerChoice)
function gamef(){
    let game;
if (computerChoice == "Rock" && humanChoice=="Rock" ||computerChoice == "Scissors" && humanChoice=="Scissors" || computerChoice == "Paper" && humanChoice=="Paper" ){
    game="tied"
}

else if (computerChoice == "Rock" && humanChoice=="Scissors" ||computerChoice == "Scissors" && humanChoice=="Paper" || computerChoice == "Paper" && humanChoice=="Rock" ){
    game="compwon"
}
else if (computerChoice == "Rock" && humanChoice=="Paper" ||computerChoice == "Scissors" && humanChoice=="Rock" || computerChoice == "Paper" && humanChoice=="Scissors" ){
    game="usrwon"
}
return game;
}
winner=gamef()
// alert(winner)

       
   if (winner == "usrwon"){
       humanScore++;
  
}

  else  if (winner == "compwon"){
        computerScore++;
}
else {
    ties++;
}



}

playRound()

     function showFinalWinner(winner) {
  // Create the headings
  const winnerHeading = document.createElement("h1");
  winnerHeading.textContent = "Winner";

  const winnerName = document.createElement("h2");
  winnerName.textContent = winner; // "Human", "Computer", or "Tie"

  // Add them to the page
  const gameContainer = document.querySelector("#game"); // or body/div where your game is
  gameContainer.appendChild(winnerHeading);
  gameContainer.appendChild(winnerName);
}
if (humanScore >= 5 || computerScore >= 5) {
  let finalWinner = humanScore > computerScore ? "Human" : "Computer";
  showFinalWinner(finalWinner);

  // disable here
  buttons.forEach(b => {
    b.disabled = true;
    b.style.opacity = "0.6";
  });
  content.style.opacity="0.4";
    dive.style.opacity="0.4";
 

}



      humanScoreDiv.textContent="Human Score:     "+ humanScore;
      compScoreDiv.textContent="Computer Score:     "+ computerScore;
      tieScoreDiv.textContent="Ties:     "+ ties;



}
      )})}
playGame()