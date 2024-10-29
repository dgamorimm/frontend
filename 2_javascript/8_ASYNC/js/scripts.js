// 1 - setTimeout
// aguarda um tempo para a função ser executada
console.log("================= 1 - setTimeout =================");

console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requisição Assíncrona !");
}, 2000)

console.log("Ainda não executou 2");

// 2 - setInterval
// aguarda um tempo para a função , mas é executada de tempos em tempos
// dependendo da ação, pode consumir a memória no computador do usuário
console.log("================= 2 - setInterval =================");

console.log("Ainda não começou");

// setInterval(function() {
//     console.log("Requisição Assíncrona !");
// }, 3000)

console.log("Ainda não começou 2 ");

// 3 - Promise
// uma função que pode ser resolvida ou rejeitada
// é literalmente uma promessa de um valor que pode chegar em um ponto futuro
console.log("================= 3 - Promises =================");

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa.then((value) => {
    console.log(`A soma é ${value}`);
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// 4 - Tratando erros nas Promises
console.log("================= 4 - Tratando erros nas Promises =================");

Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("O valor informado é inválido!");
        }
        return n;
    })
    .catch((err) => console.log(`Um erro aconteceu: ${err}`));