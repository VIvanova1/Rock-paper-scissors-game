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

        const rockElement = document.createElement('img');
        rockElement.classList.add('gameEl');
        rockElement.classList.add('rock');
        rockElement.setAttribute('src', './img/rock.png')
        gameMainElement.appendChild(rockElement);

        const scissorsElement = document.createElement('img');
        scissorsElement.classList.add('gameEl');
        scissorsElement.classList.add('scissors');
        scissorsElement.setAttribute('src', './img/scissors.png')
        gameMainElement.appendChild(scissorsElement);

        const paperElement = document.createElement('img');
        paperElement.classList.add('gameEl');
        paperElement.classList.add('paper');
        paperElement.setAttribute('src', './img/paper.png')
        gameMainElement.appendChild(paperElement);

        parentMainElement.appendChild(gameMainElement)

    });
}