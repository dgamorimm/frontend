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

