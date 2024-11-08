const mensagemCompraVazia = document.getElementById("mensagem-compra-vazia");

export function verificarCompraVazia (lista) {
    if (lista.childElementCount === 0) {
        mensagemCompraVazia.style.display = "block";
    } else {
        mensagemCompraVazia.style.display = "none";
    }
}