const choices = ["rock", "scissors", "paper"]; //
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice-btn").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice"); // Важно! Если тут будет undefined, игра сломается
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        // Определяет победителя
        const result = getResult(playerChoice, computerChoice);
        
        // Счёт
        if (result === "win") playerScore++;
        if (result === "lose") computerScore++;
        
        // Обновляем интерфейс
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        
        // результат раунда
        const roundResult = document.getElementById("round-result");
        roundResult.textContent = getResultMessage(playerChoice, computerChoice, result);
    });
});

function getResult(player, computer) {        // Игрок vs Пк
    if (player === computer) return "draw";   // Можно было бы сделать через switch-case, но if читается проще
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) return "win";
    return "lose";
}

function getResultMessage(player, computer, result) {
    const choicesRU = { rock: " Камень", scissors: " Ножницы", paper: " Бумага" };
    if (result === "draw") return `Ничья! Оба выбрали ${choicesRU[player]}`;
    if (result === "win") return `Ты выиграл! ${choicesRU[player]} бьёт ${choicesRU[computer]}`;     // if (player === "rock" && computer === "scissors") playerScore += 1;
    return `Ты проиграл! ${choicesRU[computer]} бьёт ${choicesRU[player]}`;
}

button.addEventListener("click", debounce(() => {
  // Защита (Предотвращает множественные нажатия)
}, 149));
