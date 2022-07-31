const arr = ["rock", "paper", "scissors"];

let computer_score = 0;
let player_score = 0;

const buttons = Array.from(document.querySelectorAll(".option"));
const score = document.querySelector("#score");
const restart = document.querySelector('#restart');

displayScore();

function handleClick(e)
{
    const player_choice = e.target.dataset.opt;
    // console.log(e.target.dataset.opt)
    playRound(player_choice);
}

function computer_play()
{
    return arr[Math.round(Math.random() * 10) % 3];
}

function playRound(player_choice)
{
    const computer_choice = computer_play();
    // console.log({player_choice, computer_choice});
    switch (player_choice)
    {
        case ("rock"):
            switch (computer_choice)
            {
                case ("rock"):
                    // console.log("draw");
                    break;
                case ("paper"):
                    // console.log("you lose");
                    computer_score++;
                    break;
                case ("scissors"):
                    // console.log("you win");
                    player_score++;
                    break;
            }
            break;
        case ("paper"):
            switch (computer_choice)
            {
                case ("rock"):
                    // console.log("you win");
                    player_score++;
                    break;
                case ("paper"):
                    // console.log("draw");
                    break;
                case ("scissors"):
                    // console.log("you lose");
                    computer_score++;
                    break;
            }
            break;
        case ("scissors"):
            switch (computer_choice)
            {
                case ("rock"):
                    // console.log("you lose");
                    computer_score++;
                    break;
                case ("paper"):
                    // console.log("you win");
                    player_score++;
                    break;
                case ("scissors"):
                    // console.log("draw");
                    break;
            }
            break;
    }

    displayScore();
}


function displayScore()
{
    score.textContent = `Your Score: ${player_score} Computer Score: ${computer_score}`;
}


function handleRestart()
{
    player_score = 0;
    computer_score = 0;
    displayScore();
}


buttons.forEach(button => button.addEventListener("click", handleClick));
restart.addEventListener('click', handleRestart)







/* Mouse follow Shadow*/
const body = document.querySelector('body');
const container = document.querySelector('#container');
const walk = 100;

function shadow(e)
{
  const width = body.offsetWidth;
  const height = body.offsetHeight;

  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target)
  {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - walk / 2);
  const yWalk = Math.round((y / height * walk) - walk / 2);

  container.style.cssText += `box-shadow:
                ${xWalk}px ${yWalk}px 0.3rem 0.7rem rgba(255, 255, 255, 0.3),
                0 0 1rem 0.2rem blue;
                `;
}

body.addEventListener('mousemove', shadow);
