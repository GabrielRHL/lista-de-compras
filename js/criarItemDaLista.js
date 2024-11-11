import { listaDeCompras } from "./adicionarItem.js";
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarCompraVazia } from "./verificarCompraVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados")
let contador = 0;

export function criarItemDaLista (item) {
    const itemDaLista = document.createElement("li");
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("lista__compras__container");

    const itemNomeContainer = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("lista__compras__checkbox");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("lista__compras__checkbox__input");
    inputCheckbox.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute('for', inputCheckbox.id);

    checkboxLabel.addEventListener('click', function (event) {
        const inputCheckbox = document.getElementById(event.currentTarget.getAttribute('for'));
        const checkboxCustom = event.currentTarget.querySelector(".checkbox__custom");
        const itemTitulo = event.currentTarget.closest("li").querySelector("#item-titulo");
        if (inputCheckbox.checked) {
            checkboxCustom.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustom.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
        verificarCompraVazia(listaComprados);
        verificarListaVazia(listaDeCompras);
    });

    const checkboxCustom = document.createElement("div");
    checkboxCustom.classList.add("checkbox__custom");

    checkboxLabel.appendChild(inputCheckbox);
    checkboxLabel.appendChild(checkboxCustom);

    containerCheckbox.appendChild(checkboxLabel);
    itemNomeContainer.appendChild(containerCheckbox);

    const itemNome = document.createElement("p");
    itemNome.id = "item-titulo";
    itemNome.classList.add("lista__compras__texto");
    itemNome.innerText = item;
    itemNomeContainer.appendChild(itemNome);

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("botoes__del__edit");
    containerBotoes.appendChild(inputCheckbox);

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao__acao");
    const iconeRemover = document.createElement("i");
    iconeRemover.classList.add("fa-regular", "fa-trash-can", "fa-xl");
    iconeRemover.style.color = "#674636";
    botaoRemover.addEventListener('click', function () {
        excluirItem(itemDaLista);
    });
    botaoRemover.appendChild(iconeRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao__acao");
    const iconeEditar = document.createElement("i");
    iconeEditar.classList.add("fa-regular", "fa-pen-to-square", "fa-xl");
    iconeEditar.style.color = "#674636";
    botaoEditar.addEventListener('click', function () {
        editarItem(itemDaLista);
    });
    botaoEditar.appendChild(iconeEditar);
    containerBotoes.appendChild(botaoEditar);

    itemContainer.appendChild(itemNomeContainer);
    itemContainer.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: 'numeric', minute: 'numeric'})}`;
    itemData.classList.add("lista__compras__texto");

    itemDaLista.appendChild(itemContainer);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}