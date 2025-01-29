const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const computerResult = document.querySelector('.computer-result img');
const userResult = document.querySelector('.user-result img');
const computerImages = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png'];

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
};

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const userIndex = Array.from(optionImages).indexOf(clickedImage);

    container.classList.add("start");
    resultText.textContent = "...";

    userResult.src = computerResult.src = 'images/pedra.png';

    setTimeout(() => {
        container.classList.remove("start");

        // Atualiza a imagem do usuário e do computador
        userResult.src = computerImages[userIndex];
        const randomNumber = Math.floor(Math.random() * computerImages.length);
        computerResult.src = computerImages[randomNumber];

        // Determina os valores de jogo
        const userValue = ['R', 'P', 'S'][userIndex];
        const computerValue = ['R', 'P', 'S'][randomNumber];
        const userComputerResult = userValue + computerValue;
        const finalResult = winner[userComputerResult]

        // Atualiza o texto do resultado com base no objeto `winner`
        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou!'
    }, 2000);
}

// Adiciona o evento de clique para cada imagem
optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick);
});
