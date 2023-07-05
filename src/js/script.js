const playerOptions = document.querySelectorAll("#playerOptions img");
var enemyOption = "";
var playerOption = "";

playerOptions.forEach((option) => {
    option.addEventListener("click", () => {
        playerOption = option.getAttribute("opt");
        enemyChoice();
    })
});


function enemyChoice() {
    let randChoice = Math.round(Math.random() * 3)

    const enemyOptions = document.querySelectorAll("#enemyOptions img");
    const enemyChoice = enemyOptions[randChoice];
    enemyOption = enemyChoice.getAttribute("opt");

    validateGame();
};


function validateGame() {
    let vencedor = document.querySelector('#winner');
    let playerChoice = document.querySelector("#playerChoice img");
    let enemyChoice = document.querySelector("#enemyChoice img");

    //reset das configurações
    playerChoice.src = `./src/img/${playerOption}.png`;
    playerChoice.classList.remove("image-grow-animation", "black-white");
    enemyChoice.classList.remove("black-white");
    vencedor.classList.remove("lose", "draw");

    //se empate
    if (playerOption == enemyOption) {
        setTimeout(() => {
            playerChoice.classList.add("image-grow-animation");
        }, 1);
        enemyChoice.src = `./src/img/${enemyOption}.png`;
        vencedor.innerHTML = "O jogo empatou";
        vencedor.classList.add("draw");

    //se derrota do jogador    
    } else if ((playerOption == "papel" && enemyOption == "tesoura") ||
        (playerOption == "tesoura" && enemyOption == "pedra") ||
        (playerOption == "pedra" && enemyOption == "papel")) {

        setTimeout(() => {
            playerChoice.classList.add("image-grow-animation");
        }, 1);
        playerChoice.classList.add("black-white");
        enemyChoice.src = `./src/img/${enemyOption}.png`;
        vencedor.innerHTML = "O inimigo ganhou";
        vencedor.classList.add("lose");

    //se vitória do jogador    
    } else {
        setTimeout(() => {
            playerChoice.classList.add("image-grow-animation");
        }, 1);
        enemyChoice.classList.add("black-white");
        enemyChoice.src = `./src/img/${enemyOption}.png`;
        vencedor.innerHTML = "O player ganhou";
    }
}
