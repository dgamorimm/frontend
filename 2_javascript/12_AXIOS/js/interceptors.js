// Requisição

postsFetch.interceptors.request.use(
    function(config) {
        console.log("Antes da requisição...");
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)

// Resposta

postsFetch.interceptors.response.use(
    function(response) {
        console.log("Antes da resposta...");
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
)

// Isso é como se fosse o middleware, então antes da 
// requisição ou antes da resposta eu posso fazer alguma coisa