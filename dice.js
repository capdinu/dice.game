let score1 = 0;
let score2 = 0;
const winningScore = 20;

const messageElement = document.createElement('p');
document.body.appendChild(messageElement);

document.getElementById('dinu5').addEventListener('click', function() {
    if (score1 >= winningScore || score2 >= winningScore) {
        return; 
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    score1 += dice1;
    score2 += dice2;

    document.getElementById('dinu2').textContent = dice1;
    document.getElementById('dinu4').textContent = dice2;
    document.getElementById('dinu1').textContent = `Score: ${score1}`;
    document.getElementById('dinu3').textContent = `Score: ${score2}`;

    if (score1 >= winningScore || score2 >= winningScore) {
        document.getElementById('dinu5').disabled = true; // Disable rolling
        messageElement.textContent = `${score1 >= winningScore ? 'Player 1 Wins!' : 'Player 2 Wins!'}`;
    }
});

document.getElementById('dinu6').addEventListener('click', function() {
    score1 = 0;
    score2 = 0;
    messageElement.textContent = ''; // Clear message

    document.getElementById('dinu2').textContent = '0';
    document.getElementById('dinu4').textContent = '0';
    document.getElementById('dinu1').textContent = `Score: ${score1}`;
    document.getElementById('dinu3').textContent = `Score: ${score2}`;
    document.getElementById('dinu5').disabled = false; // Re-enable rolling
});