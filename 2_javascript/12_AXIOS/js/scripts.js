// 1 - instalação
console.log(axios);

// 2 - primeiro request

const getData = async() => {

    try {
        
        // 7 - Custom Instance - postsFetch
        const response = await postsFetch.get("/users",
            //  4 - definindo headers
            {
                headers : {
                    "Content-Type" : "application/json",
                    custom : "header"
                }
            }
        );

        console.log(response);

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

getData();

// 3 - Imprimindo dados da API

const container = document.querySelector("#user-container");

const printData = async() => {
    
    const data = await getData()

    data.forEach((user) => {
        const div = document.createElement("div");
        
        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");

        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div);
    });
}

printData();

//  5 - Post

const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();  // previne o reload da página

    // 7 - Custom Instance - postsFetch
    postsFetch.post("/posts", {
        title : titleInput.value,
        body : bodyInput.value,
        userId : 1
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
});

// 6 - Global Instance