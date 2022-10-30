function game() {

    const parentMainElement = document.getElementsByTagName('main')[0];
    const playerName = document.getElementById('userName').value;

    //remove div for username
    const playerDiv = document.getElementsByClassName('playerUser');
    playerDiv[0].remove();

    //create div for result
    const resultDivElement = document.createElement('div');
    resultDivElement.classList.add('game');

    const userResultDiv = document.createElement('div');
    let userResultValue = 0;
    userResultDiv.textContent = `${playerName}: ${userResultValue}`;
    userResultDiv.classList.add('result')
    resultDivElement.appendChild(userResultDiv);

    const computerResultDiv = document.createElement('div');
    let computerResultValue = 0;
    computerResultDiv.textContent = `Computer: ${computerResultValue}`;
    computerResultDiv.classList.add('result')
    resultDivElement.appendChild(computerResultDiv);

    parentMainElement.appendChild(resultDivElement);

    // create a div for "tie path"
    const privateDiv = document.createElement('div');
    const pPrivate = document.createElement('p');
    pPrivate.textContent = 'It is a tie!';
    pPrivate.style.display = 'none';
    privateDiv.appendChild(pPrivate);
    parentMainElement.appendChild(privateDiv);

    //create main game
    const gameMainElement = document.createElement('div');

    const rockElement = document.createElement('div');
    const rockImg = document.createElement('img');
    rockElement.classList.add('gameEl');
    rockElement.setAttribute('id', 'rock')
    rockImg.setAttribute('src', './img/rock.png');
    rockElement.appendChild(rockImg);
    gameMainElement.appendChild(rockElement);

    const scissorsElement = document.createElement('div');
    const scissorsImg = document.createElement('img');
    scissorsElement.classList.add('gameEl');
    scissorsElement.setAttribute('id', 'scissors')
    scissorsImg.setAttribute('src', './img/scissors.png');
    scissorsElement.appendChild(scissorsImg);
    gameMainElement.appendChild(scissorsElement);

    const paperElement = document.createElement('div');
    const paperImg = document.createElement('img');
    paperElement.classList.add('gameEl');
    paperElement.setAttribute('id', 'paper')
    paperImg.setAttribute('src', './img/paper.png');
    paperElement.appendChild(paperImg);
    gameMainElement.appendChild(paperElement);

    parentMainElement.appendChild(gameMainElement);

    //reset game
    const resetBtnEl = document.createElement('button');
    resetBtnEl.textContent = 'Reset Game';
    resetBtnEl.setAttribute('id', 'resetBtn')
    resetBtnEl.addEventListener('click', (e) => {
        userResultValue = 0;
        userResultDiv.textContent = `${playerName}: ${userResultValue}`;
        computerResultValue = 0;
        computerResultDiv.textContent = `Computer: ${computerResultValue}`;
    });
    parentMainElement.appendChild(resetBtnEl);

    const allGameEl = Array.from(document.querySelectorAll('.gameEl'));

    for (let i = 0; i < allGameEl.length; i++) {
        const element = allGameEl[i];
        element.addEventListener('click', playGame);
    }


    function playGame(еv) {
        pPrivate.style.display = 'none';
        //Player Choice
        let playerChoice = еv.currentTarget.id;
        const playerImg = document.getElementById(playerChoice);

        //Computer Choice
        let computerChoise = Math.random();
        if ((computerChoise < 0.1) || (computerChoise >= 0.3 && computerChoise < 0.4) || (computerChoise >= 0.6 && computerChoise < 0.7) || (computerChoise >= 0.9)) {
            computerChoise = 'rock';
        } else if ((computerChoise < 0.2) || (computerChoise >= 0.4 && computerChoise < 0.5) || (computerChoise >= 0.7 && computerChoise < 0.8)) {
            computerChoise = 'scissors';
        } else if ((computerChoise < 0.3) || (computerChoise >= 0.5 && computerChoise < 0.6) || (computerChoise >= 0.8 && computerChoise < 0.9)) {
            computerChoise = 'paper';
        }

        //Result Game
        let resultTempGame = checkWinner(playerChoice, computerChoise);
        if (resultTempGame == 'player') {
            userResultValue++;
            userResultDiv.textContent = `${playerName}: ${userResultValue}`;

        } else if (resultTempGame == 'computer') {
            computerResultValue++;
            computerResultDiv.textContent = `Computer: ${computerResultValue}`;
        } else if (resultTempGame == 'equal') {
            pPrivate.style.display = 'inline-block'
        };

        // Check who is the winner
        function checkWinner(playerChoice, computerChoise) {
            if (playerChoice == 'rock') {
                if (computerChoise == 'scissors') {
                    return 'player';
                } else if (computerChoise == 'paper') {
                    return 'computer';
                } else {
                    return 'equal';
                }
            } else if (playerChoice == 'scissors') {
                if (computerChoise == 'rock') {
                    return 'computer';
                } else if (computerChoise == 'paper') {
                    return 'player';
                } else {
                    return 'equal';
                }
            } else if (playerChoice == 'paper') {
                if (computerChoise == 'scissors') {
                    return 'computer';
                } else if (computerChoise == 'rock') {
                    return 'player';
                } else {
                    return 'equal';
                }
            }
        }
    }

}