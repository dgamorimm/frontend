// Selecionando os elementos

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Eventos

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        // remove a classe "selected" de todos os botoes para não aparecer a cor azul
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // pega o id do botão que estou clicando
        const button = e.target
        const id = button.getAttribute("id");

        // adiciona a classe "selected" ao botão clicado
        button.querySelector(".color").classList.add("selected");

        // troca a imagem
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        // remove a classe "changing" depois de 200ms para retornar a imagem original removendo o efeito de mudança
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);

    });
});