// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // limpando a tabela

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
                            <div class="operation">${number} x ${i} =</div>
                            <div class="result">${result}</div>
                        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html"); // transformando o template em html

        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}

// Eventos
multiplicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const multiplicationNumber = +numberInput.value; // colocando o mais na frente , transforma o numero em um inteiro
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;  // se os numeros não tiverem preenchidos

    createTable(multiplicationNumber, multiplicatorNumber);
})