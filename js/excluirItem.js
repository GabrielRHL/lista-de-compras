import { verificarCompraVazia } from "./verificarCompraVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados")
const listaDeCompras = document.getElementById("lista-compras-ul");

export const excluirItem = (element) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        element.remove();

        verificarListaVazia(listaDeCompras);
        verificarCompraVazia(listaComprados);
    }
}