// 1 - Strict (usado para debugar quem escreve JS puro)
"use strict";

// opa = "teste";

const opa = "teste";

// const undefined = 10;

// delete [].length;

// 2 - console.log

let a =1;
let b =2;

if (a == 1) {
    a = b + 2;
    console.log(a);
}

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5){
    a = 25;
}

console.log(a)

// 3 - debugger
//  No inspecionar do navegador na aba "Sources", você consegue debugar linha a linha
let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2
}

// debugger; 

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("Executou o loop");

// debugger;

if (c > 5){
    c = 25
}

// 4 - tratamento de dados

function checkNumber(n){

    const  result = Number(n);

    if (Number.isNaN(result)) {
        console.log("Valor incorreto !");
        return;
    }

    console.log("Valor correto !");
    return result;
}

checkNumber("asd");
checkNumber(1);
checkNumber(3.14);
checkNumber("5");
checkNumber({});

// 5 - Exceptions

let x  = 10;

// if(x != 11){
//     throw new Error("O valor de X não pode ser diferente de 11!");
// }

// 6 - Try Catch

try {
    const soma = x  + y;
} catch (error) {
    console.log(`Erro no programa: ${error}`);
}

// 7 - Finally

try{
    const value = checkNumber("1");

    if (!value){
        throw new Error("Valores inválidos");
    }
} catch (error) {
    console.log(`Erro no programa: ${error}`);
} finally {
    console.log("Fim do programa");
}

// 8 - Assertions

function checkArray(arr){

    if(arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// checkArray([]);
checkArray([1, 2, 3]);