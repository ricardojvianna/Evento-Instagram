let imagem = document.querySelector("#troca-imagem")

function rotateImagem () {
    if(imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0
    }
}

setInterval(() => {
    rotateImagem()
}, 4000);

