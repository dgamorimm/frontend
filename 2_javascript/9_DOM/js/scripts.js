// 1 - movendo-se pelo DOM
console.log("================= 1 - movendo-se pelo DOM =================");
console.log(document.body);

console.log(document.body.childNodes);


console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando elementos por tag
console.log("================= 2 - Selecionando elementos por tag =================");

const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - Selecionando elementos por id
console.log("================= 3 - Selecionando elementos por id =================");

const title = document.getElementById("title");
console.log(title);

// 4 - Selecionando elementos por classe
console.log("================= 4 - Selecionando elementos por classe =================");

const products = document.getElementsByClassName("product");
console.log(products);

// 5 - Selecionando elementos por regras de CSS  (mais utilizado hoje em dia)
console.log("================= 5 - Selecionando elementos por regras de CSS =================");

const productsQuery =  document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// Alterando o DOM

// 6 - Método insertBefore
console.log("================= 6 - Metodo insertBefore =================");

const p = document.createElement("p");
console.log(p);

const header = title.parentElement;
console.log(header);

header.insertBefore(p, title);

// 7 - Método appendChild
console.log("================= 7 - Metodo appendChild =================");

const navLinks = document.querySelector("nav ul");
console.log(navLinks);

const li = document.createElement("li");
console.log(li);

navLinks.appendChild(li);

// 8 - Método replaceChild
console.log("================= 8 - Metodo replaceChild =================");

const h2 = document.createElement("h2");
console.log(h2);

h2.textContent = "Meu novo título";
console.log(h2);

header.replaceChild(h2, title);

// 9 - Criando nós de texto
console.log("================= 9 - Criando nós de texto =================");

const myText = document.createTextNode("Agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);
console.log(h3);

mainContainer.appendChild(h3);

// 10 - Alterando os atributos de um elemento
console.log("================= 10 - Alterando os atributos de um elemento =================");

const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com.br");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");
console.log(firstLink.getAttribute("target"));

// 11 - Altura e largura dos elementos
console.log("================= 11 - Altura e largura dos elementos =================");

const footer = document.querySelector("footer");
console.log(footer);

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// 12 - Posição do elemento
console.log("================= 12 - Posição do elemento =================");

const product1 = products[0]

console.log(product1.getBoundingClientRect());

// 13 - Alterando o estilo dos elementos
console.log("================= 13 - Alterando o estilo dos elementos =================");

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - Estilizando vários itens
console.log("================= 14 - Estilizando varios itens =================");

for(const li of listItens) {
    li.style.backgroundColor = "red";
}