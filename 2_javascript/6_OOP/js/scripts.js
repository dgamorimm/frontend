// 1 - Métodos
console.log("================= 1 - Métodos =================");
const animal = {
    nome : "Bob",
    latir : function() {
        console.log("Au au");
    }
}

console.log(animal.nome);

// Método do objeto
animal.latir();

// 2 - Aprofundando em métodos
console.log("================= 2 - Aprofundando em métodos =================");
const pessoa ={
    nome : "Douglas",
    getNome : function() {
        return this.nome;
    },
    setNome : function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Douglas Amorim");
console.log(pessoa.getNome())

// 3 - Prototypes
console.log("================= 3 - Prototypes (não é utilizada) =================");
// Prototypes : É um recurso que faz parte da arquitetura de JavaScript
// É uma espécie de herança, onde objetos pais herdam propriedades e métodos aos filhos
// Muitos dados considerados objetos e temos objetos como : string, number, array, object, function e etc
// Ou seja, cada dado tem um objeto pai que herdou caracteristicas pelo prototype

// Ele é famoso, mas não é comumente utilizado. (não é uma práica recomendada , pois estariamos alterando como o JS funciona)

// Fallback : Quando uma propriedade não existe no objeto, ela é procurada no seu ancestral
// Ou seja, é por isso que temos acesso a length em strings por exemplo

const text = 'asd'

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototypes
console.log("================= 4 - Mais sobre prototypes (não é utilizada) =================");

const myObject = { a : "b"};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - Classes Básicas
console.log("================= 5 - Classes Básicas (não é utilizada) =================");

const cachorro = {
    raca: null,
    patas : 4
}

const pastorAlemao =  Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);
console.log(bulldog.patas);

// 6 - Funções como classes
console.log("================= 6 - Funções como classes (não é utilizada) =================");

function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;
    
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira Lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

// 7 - Funções construtoras
console.log("================= 7 - Funções construtoras (não é utilizada) =================");

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husk = new Cachorro("Ozzy", "Husky");

console.log(husk);

// 8 - Métodos em funções construtoras
console.log("================= 8 - Métodos em funções construtoras (não é utilizada) =================");

Cachorro.prototype.uivar = function() {
    console.log("Au au");
}
console.log(Cachorro.prototype);
husk.uivar();

// 9 - Classes
console.log("================= 9 - Classes =================");

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);
console.log(Object.getPrototypeOf(jeff))

// 10 - Mais sobre as classes
console.log("================= 10 - Mais sobre as classes =================");

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Branca");

console.log(scania);
scania.descreverCaminhao();

const c2 = new Caminhao(8, "Vermelha");

console.log(c2);
console.log(c2.motor);


// 11 - Substituindo propriedades via prototype
console.log("================= 11 - Substituindo propriedades via prototype =================");

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const douglas = new Humano("Douglas", 29);

console.log(douglas);

Humano.prototype.idade = "Não Definida!";

console.log(douglas.idade);
console.log(Humano.prototype.idade);

// 12 - Symbols em classes
console.log("================= 12 - Symbols em classes =================");

class Aviao {
    constructor(marca, turbinas){
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - Getter e Setter
console.log("================= 13 - Getter e Setter =================");

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays
    }
}

// Não é obrigado passar a classe a propriedade que ainda não tem . Nesse caso não foi passado as tags
const myPost = new Post("Algum Post", "Um post sobre programação");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "python, javascript, go";

console.log(myPost);

// 14 - Herancas
console.log("================= 14 - Heranças =================");

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Tiburo");

console.log(shark);

console.log(shark.patas);

// 15 - Operador instanceof
console.log("================= 15 - Operador instanceof =================");

console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a", "b") instanceof Cachorro);
