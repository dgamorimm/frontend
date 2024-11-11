// 1 - var, let e const

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

function logName() {
    const name = "Douglas";
    console.log(name);
}

const name = "Paula";

logName();

console.log(name);

// 2 - Arrow functions

// função normal
const sum = function (a, b) {
    return a + b;
};

// função arrow
const arrowSum = (a, b) => a + b;

console.log(sum(1, 2));
console.log(arrowSum(1, 2));

const greeting = (name) => {
    
    if(name) {
        return `Hello ${name}!`
    } else {
        return "Hello!"
    }
}

console.log(greeting("Douglas"));
console.log(greeting());

const user   = {
    name: "Douglas",
    sayUserName() {
        setTimeout(function () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000)
    }
}

user.sayUserName();
user.sayUserNameArrow();

//  3 - Filter

const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    {name : "Douglas", available : true},
    {name : "Fulano", available : false},
    {name : "Ciclano", available : true},
    {name : "Beltrano", available : false},
]

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// 4 - Map

const products =  [
    {name : "Camisa", price : 10.99, category: "Roupas"},
    {name : "Chaleira Elétrica", price : 150, category: "Eletro"},
    {name : "Fogão", price : 499, category: "Eletro"},
    {name : "Calça Jeans", price : 87.99, category: "Roupas"},
]

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true;
    }
});

console.log(products);

// 5 - Template Literals

const userName = "Douglas"
const age = 29

console.log(`O nome do usuário é ${userName} e ele tem ${29} anos`);

// 6 - Destructuring

const fruits = ["Maçã", "Mamão", "Laranja"]

const [f1, f2, f3] = fruits;

console.log(f1, f2);

const productDetails = {
    name : "Mouse",
    price: 39.99,
    category: "Periférico",
    color : "Cinza"
}

const  {name : productName, price, category, color} = productDetails;

console.log(`O nome do produto é ${productName}, ele custa ${price} e é da cor ${color.toLowerCase()}`);

// 7 - Spread Operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a3, 7]

console.log(a4);

const carName = {name : "Gol"}
const carBrand = {brand : "VW"}
const otherInfos = {km : 10000000, price: 4999}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car);

// 8 - Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20);
console.log(shirt);

console.log(shirt.productWithDiscount(10));

// 9 - Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach(color => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapeu", 20, ["Preto", "Branco", "Azul"]);

console.log(hat);

console.log(hat.name);

hat.showColors();