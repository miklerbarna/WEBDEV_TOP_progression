let options = ['rock', 'paper', 'scissors'];
let myscore = 0;
let compscore = 0;


function playerchoose()
{
    let player_answer = prompt('Choose:\n[1] rock\n[2] paper\n[3] scissors');
    if (player_answer > 3 || player_answer < 1)
    {
        return;
    }
    else
    {
        return options[player_answer - 1];
    }
}

function computerPlay()
{
    return options[(Math.round(10 * Math.random())) % 3];
}


function evaluate(player_option, computer_option)
{
    switch (player_option)
    {
        case ('rock'):
            switch (computer_option)
            {
                case ('rock'):
                    alert('draw');
                    break;
                case ('paper'):
                    alert('you lose');
                    compscore++;
                    break;
                case ('scissors'):
                    alert('you win');
                    myscore++;
                    break;
            }
            break;
        case ('paper'):
            switch (computer_option)
            {
                case ('rock'):
                    alert('you win');
                    myscore++;
                    break;
                case ('paper'):
                    alert('draw');
                    break;
                case ('scissors'):
                    alert('you lose');
                    compscore++;
                    break;
            }
            break;
        case ('scissors'):
            switch (computer_option)
            {
                case ('rock'):
                    alert('you lose');
                    compscore++;
                    break;
                case ('paper'):
                    alert('you win');
                    myscore++;
                    break;
                case ('scissors'):
                    alert('draw');
                    break;
            }
            break;
    }
}


function game()
{
    let player_option = playerchoose();
    if (player_option === undefined)
    {
        alert('This value does not exist');
        return;
    }
    let computer_option = computerPlay();
    evaluate(player_option, computer_option);
}


while (true)
{
    game();
    alert(`Your score: ${myscore}\nComputers score: ${compscore}`);
}