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

// 5 - Rejeitando Promises
//  A rejeição é diferente do erro, ocorre quando nós decidimos ejetar uma promise
//  podemos fazer isso com o método reject
console.log("================= 5 - Rejeitando Promises =================");

function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if (n > 10) {
            resolve(`Esse número é maior que 10`);
        } else {
            reject(new Error("Esse número é muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(5)

console.log(a);
console.log(b);

a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);

// 6 - Resolvendo várias Promisses
// é muito performático
// ele resolve todos os métodos async de uma vez só
console.log("================= 6 - Resolvendo varias Promisses =================");

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 1000)
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else {
        reject("Erro !")
    }
});

Promise.all([p1, p2, p3])
    .then((values) => console.log(values))
    .catch((err) => console.log(err))

// 7 - Async functions
//  São funções que retornan Promises
// Consequentemente há a possibilidade de receber o resultado depois, além da utilização dos métodos de Promise
// Há uma migração de Promises para Async Funtions
console.log("================= 7 - Async functions =================");

async function somarComDelay(a, b){
    return a + b;
}

somarComDelay(2, 4)
    .then((value) => {
        console.log(`O valor da soma é: ${value}`);
    })

// 8 - Async await
// espera pelo resultado de uma promise da async function
console.log("================= 8 - Await =================");

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou : ${result}`);
}

chamadaAsync();

// 9 - Generators
//  sao funções que retornam iteradores
//  eles permitem que o código seja executado em partes diferentes do que no normal
console.log("================= 9 - Generators =================");

function* gerarNumeros() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gerarNumeros();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);