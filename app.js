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



    });
}