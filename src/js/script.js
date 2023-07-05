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
    
    
    if (playerOption == "papel") {
        playerChoice.src = "./src/img/papel.png";
        playerChoice.classList.remove("image-grow-animation", "black-white");
        enemyChoice.classList.remove("black-white");
        vencedor.classList.remove("lose", "draw");

        if (enemyOption == "papel") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/papel.png";
            vencedor.innerHTML = "O jogo empatou";
            vencedor.classList.add("draw")
            
        } else if (enemyOption == "tesoura") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation")
            }, 1);
            playerChoice.classList.add("black-white");
            enemyChoice.src = "./src/img/tesoura.png";
            vencedor.innerHTML = "O inimigo ganhou";
            vencedor.classList.add("lose");

        } else if (enemyOption == "pedra") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.classList.add("black-white");
            enemyChoice.src = "./src/img/pedra.png";
            vencedor.innerHTML = "O player ganhou";
        };


    };


    if (playerOption == "tesoura") {
        playerChoice.src = "./src/img/tesoura.png";
        playerChoice.classList.remove("image-grow-animation", "black-white");
        enemyChoice.classList.remove("black-white");
        vencedor.classList.remove("lose", "draw");

        if (enemyOption == "papel") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/papel.png";
            vencedor.innerHTML = "O player ganhou";
            enemyChoice.classList.add("black-white");

        } else if (enemyOption == "tesoura") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation")
            }, 1);
            enemyChoice.src = "./src/img/tesoura.png"
            vencedor.innerHTML = "O jogo empatou";
            vencedor.classList.add("draw")

        } else if (enemyOption == "pedra") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            playerChoice.classList.add("black-white")
            enemyChoice.src = "./src/img/pedra.png"
            vencedor.innerHTML = "O inimigo ganhou";
        };

    };

    if (playerOption == "pedra") {
        playerChoice.src = "./src/img/pedra.png";
        playerChoice.classList.remove("image-grow-animation", "black-white");
        enemyChoice.classList.remove("black-white");
        vencedor.classList.remove("lose", "draw");

        if (enemyOption == "papel") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/papel.png";
            vencedor.innerHTML = "O inimigo ganhou";
            playerChoice.classList.add("black-white");

        } else if (enemyOption == "tesoura") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation")
            }, 1);
            enemyChoice.src = "./src/img/tesoura.png";
            enemyChoice.classList.add("black-white");
            vencedor.innerHTML = "O player ganhou";

        } else if (enemyOption == "pedra") {
            setTimeout(() => {
                playerChoice.classList.add("image-grow-animation");
            }, 60);
            enemyChoice.src = "./src/img/pedra.png"
            vencedor.innerHTML = "O jogo empatou";
        };

    };

};
