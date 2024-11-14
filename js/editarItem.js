import { novaData } from "./novaData.js";

export const editarItem = (element) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTituloNovo = element.querySelector("#item-titulo");
        itemTituloNovo.textContent = novoItem;

        const verificarEstavaComprado = element.querySelector(".lista__compras__checkbox__input").checked;
        if (verificarEstavaComprado) {
            element.querySelector(".lista__compras__checkbox__input").checked = true;
            element.querySelector(".checkbox__custom").classList.add("checked");
            itemTituloNovo.style.textDecoration = "line-through";
        }
        const itemDataNova = element.querySelector("#item-data");
        itemDataNova.textContent = novaData();
    }
}