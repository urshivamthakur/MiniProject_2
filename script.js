let userScore = 0;
let compScore = 0;

// let userScore = document.querySelector("#user-score");
// let compScore = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    // Generate Computer Choice
}

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("Id");
    console.log("Choice was clicked", ",", choiceId);
  });
});
