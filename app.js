window.addEventListener('load', game);

function game() {
    const startBtnElement = document.getElementById('start');
    startBtnElement.addEventListener('click', () => {
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

        parentMainElement.appendChild(resultDivElement)

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
        resetBtnEl.textContent = 'Reset Game'
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
            let playerChoice = еv.currentTarget.id;
            console.log(`Player - ${playerChoice}`);
            let computerChoise = Math.random();
            console.log(`Computer - ${computerChoise}`);
            if (computerChoise < 0.33) {
                computerChoise = 'rock';
            } else if (computerChoise < 0.67) {
                computerChoise = 'scissors';
            } else {
                computerChoise = 'paper';
            }

            let resultTempGame = checkWinner(playerChoice, computerChoise);
            if (resultTempGame == 'player') {
                userResultValue++;
                userResultDiv.textContent = `${playerName}: ${userResultValue}`;
            } else if (resultTempGame == 'computer') {
                computerResultValue++;
                computerResultDiv.textContent = `Computer: ${computerResultValue}`;
            } else if (resultTempGame == 'equal') {
                window.alert('it is a tie!');
            }


            function checkWinner(playerChoice, computerChoise) {
                if (playerChoice == 'rock') {
                    if (computerChoise == 'scissors') {
                        return 'player';
                    } else if (computerChoise == 'paper') {
                        return 'computer';
                    } else {
                        return 'equal'
                    }
                } else if (playerChoice == 'scissors') {
                    if (computerChoise == 'rock') {
                        return 'computer';
                    } else if (computerChoise == 'paper') {
                        return 'player';
                    } else {
                        return 'equal'
                    }
                } else if (playerChoice == 'paper') {
                    if (computerChoise == 'scissors') {
                        return 'computer';
                    } else if (computerChoise == 'rock') {
                        return 'player';
                    } else {
                        return 'equal'
                    }
                }
            }


        }
    });





}