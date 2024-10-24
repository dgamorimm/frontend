// Arrays
console.log("================= 1 - Arrays =================");
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(typeof lista);
console.log(lista);

// Mais sobre arrays
console.log("================= 2 - Mais sobre arrays =================");
const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(lista2[1]);
console.log(lista2[83]);

// Propriedades
console.log("================= 3 - Propriedades =================");
const numbers = [5, 4, 3];

console.log(numbers.length);
console.log(numbers["length"]);

const  myName = "Douglas";

console.log(myName.length);

// Métodos
console.log("================= 4 - Métodos =================");
const otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(text.indexOf("g"))

// Objetos ( Object Literals )
console.log("================= 5 - Objetos ( Object Literals ) =================");

const person = {
    name: "Douglas",
    age: 30,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// Criando e removendo propriedades
console.log("================= 6 - Criando e removendo propriedades =================");

const car ={
    engine: 2.0,
    brand: "BMW",
    model: "X5",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// Mais sobre objetos
console.log("================= 7 - Mais sobre objetos =================");
const obj ={
    a : "teste",
    b : true,
};

console.log(obj instanceof Object);

const obj2 ={
    c: []
};

Object.assign(obj2, obj);

console.log(obj);
console.log(obj2);

// Conhecendo melhor os objetos
console.log("================= 8 - Conhecendo melhor os objetos =================");
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(obj));

// Mutação
console.log("================= 9 - Mutação =================");
// referencia a primeiro objeto, como se fosse um link

const a = {
    name: "Douglas",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// Loop em arrays
console.log("================= 10 - Loop em arrays =================");
const users = ["Douglas", "Maria", "João"];

for (let idx = 0; idx < users.length; idx++) {
    console.log(`Listando o usuário: ${users[idx]}`);
}

// Push e Pop
console.log("================= 11 - Push e Pop =================");
// push adiciona um elemento no final do array
// pop remove o ultimo elemento do array

const array = ["a", "b", "c"]

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// Shift e Unshift
console.log("================= 12 - Shift e Unshift =================");
// shift remove o primeiro elemento do array
// unshift adiciona um elemento no comeco do array

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

console.log(letters);

letters.unshift("d");

console.log(letters);

// indexOf e lastIndexOf
console.log("================= 13 - indexOf e lastIndexOf =================");

const myElement = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElement.indexOf("Maçã"));
console.log(myElement.indexOf("Abacate"));

console.log(myElement[2]);
console.log(myElement[myElement.indexOf("Abacate")]);

console.log(myElement.lastIndexOf("Abacate"));
console.log(myElement.indexOf("Mamão"));
console.log(myElement.lastIndexOf("Mamão"));

// Slice
console.log("================= 14 - Slice =================");
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);
console.log(testeSlice);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);