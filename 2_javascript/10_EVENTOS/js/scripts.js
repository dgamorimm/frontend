// 1 - adicionando eventos
console.log("===================== Adicionando eventos ======================");
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou aqui!");
});

// 2 - removendo eventos
console.log("===================== Removendo eventos ======================");

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - Objeto do evento
console.log("===================== Objeto do evento ======================");

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event); 
    console.log(event.offsetX);  // posição do elemento no eixo x
    console.log(event.pointerType);
    console.log(event.target);  // elemento alvo, como se tivesse selecionando o elemento
});

// 4 - Propagação de eventos
console.log("===================== Propagação de eventos ======================");


const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation(); // Esse método impede que o evento pai não se propague para o evento filho
    console.log("Evento 2");
});

// 5 - Removendo o evento padrão
console.log("===================== Ações default ======================");

const a = document.querySelector("a");

a.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("Não alterou a página");
});

// 6 - Eventos de teclado
console.log("===================== Eventos de teclado ======================");

document.addEventListener("keyup", (event) => {
    console.log(`Soltou a tecla ${event.key}`);
});

document.addEventListener("keydown", (event) => {
    console.log(`Apertou a tecla ${event.key}`);
});

// 7 - Eventos de mouse
console.log("===================== Eventos de mouse ======================");

const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", (event) => {
    console.log("Pressionou o botão");
});

mouse.addEventListener("mouseup", (event) => {
    console.log("Soltou o botão");
});

mouse.addEventListener("dblclick", (event) => {
    console.log("Clique duplo");
});


mouse.addEventListener("mousemove", (event) => {
    // console.log(`Nova posição x: ${event.clientX} e y: ${event.clientY}`);
});

// 8 - Eventos de scroll
console.log("===================== Eventos de scroll ======================");

window.addEventListener("scroll", (event) => {
    if(window.scrollY > 200){
        console.log("Passamos de 200px para cima");
    }
})

// 9 - Eventos de foco
console.log("===================== Eventos de foco ======================");

const myInput = document.querySelector("#my-input");

myInput.addEventListener("focus", (event) => {
    console.log("Entrou no input");
});

myInput.addEventListener("blur", (event) => {
    console.log("Saiu do input");
});

// 10 - Eventos de carregamento de página

window.addEventListener("load", (event) => {
    console.log("Carregou a página");
})

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    console.log("Sair da página");
})

// 11 - Debounce
//  Receita de bolo para otimizar a memória do computador

const debounce = (f, delay) => {
    let timeout

    return (...args) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(args)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
        console.log("Executando a cada 400ms");
    },400)
);