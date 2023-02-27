/* 
OBJETIVO 1 - Quando o usuário clicar no botão "veja trailer", deverá abrir a modal com o vídeo do trailer 
    PASSO 1 - Dar um jeito de pegar o elemento que representa o botão "veja trailer" usando js
    PASSO 2 - Dar um jeito de identificar quando o usuário clicar no botão
    PASSO 3 - Dar um jeito de pegar o elemento da modal no js
    PASSO 4 - Abrir a modal na tela

OBJETIVO 2 - Quando o usuário clicar no botão "X", a modal com o vídeo do trailer deverá se fechar
    PASSO 1 - Dar um jeito de pegar o elemento que representa o botão "X" usando o js
    PASSO 2 - Dar um jeito de identificar quando o usuário clicar no botão "X"
    PASSO 3 - Fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto")

}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);

});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});



