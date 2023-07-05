const playerOptions = document.querySelectorAll("#playerOptions img");
var enemyOption = "";
var playerOption = "";


function validateGame() {
    let vencedor = document.querySelector('#winner');
    let playerChoice = document.querySelector("#playerChoice img");
    let enemyChoice = document.querySelector("#enemyChoice img");
    
    
    if (playerOption == "papel") {
        playerChoice.src = "./src/img/papel.png"
        playerChoice.classList.remove("image-grow-animation");

        if (enemyOption == "papel") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/papel.png"
            vencedor.innerHTML = "O jogo foi empatado";
            vencedor.classList.add("draw")
            vencedor.classList.remove("lose")

        } else if (enemyOption == "tesoura") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 1);
            enemyChoice.src = "./src/img/tesoura.png"
            vencedor.innerHTML = "O inimigo ganhou";
            vencedor.classList.add("lose")
            vencedor.classList.remove("draw")

        } else if (enemyOption == "pedra") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/pedra.png"
            vencedor.innerHTML = "O player ganhou";
            vencedor.classList.remove("draw", "lose")
        };


    };


    if (playerOption == "tesoura") {

        if (enemyOption == "papel") {
            vencedor.innerHTML = "O jogo foi empatado";
            vencedor.classList.add("draw");
            vencedor.classList.remove("lose");

        } else if (enemyOption == "tesoura") {
            vencedor.innerHTML = "O inimigo ganhou";
            vencedor.classList.add("lose");
            vencedor.classList.remove("draw");

        } else if (enemyOption == "pedra") {
            vencedor.innerHTML = "O player ganhou";
            vencedor.classList.remove("draw", "lose");
        };

    };

    if (playerOption == "pedra") {

        if (enemyOption == "papel") {
            vencedor.innerHTML = "O jogo foi empatado";
            vencedor.classList.add("draw")
            vencedor.classList.remove("lose")

        } else if (enemyOption == "tesoura") {
            vencedor.innerHTML = "O inimigo ganhou";
            vencedor.classList.add("lose")
            vencedor.classList.remove("draw")

        } else if (enemyOption == "pedra") {
            vencedor.innerHTML = "O player ganhou";
            vencedor.classList.remove("draw", "lose")
        };

    };

};

function enemyChoice() {
    let randChoice = Math.round(Math.random() * 3)

    const enemyOptions = document.querySelectorAll("#enemyOptions img")
    const enemyChoice = enemyOptions[randChoice]
    enemyOption = enemyChoice.getAttribute("opt")

    validateGame()
}

playerOptions.forEach((option) => {
    option.addEventListener("click", (t) => {
        playerOption = option.getAttribute("opt")
        enemyChoice()
    })
})