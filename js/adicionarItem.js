import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const limiteLista = 5;
export const listaDeCompras = document.getElementById("lista-compras-ul");

export function adicionarItem(event) {
    event.preventDefault()
    if (listaDeCompras.children.length > limiteLista) {
        alert("A lista tem um limite de 5 itens!");
        return;
    }
    if (item.value === "") {
        alert("Por favor, digite o item antes de adicionar!")
        return;
    }
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

    item.value = '';
}